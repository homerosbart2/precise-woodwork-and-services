import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { en } from './lang/en';
import { es } from './lang/es';
import { Navbar } from './components/navbar';
import { ROUTE } from './types/route';
import { ImageStore } from './stores/image-store';
import { RouteCarousel } from './components/route-carousel';
import { RouteCarouselHorse } from './components/route-carousel/route-carousel-horse';
import { Locale } from './types/locale';
import { ServicesRoute } from './components/services-route';
import { HomeRoute } from './components/home-route';
import { ContactRoute } from './components/contact-route';
import { SERVICE } from './types/service';

require('./App.scss');

const messages = {
    en,
    es,
};

const LOCAL_STORAGE_LOCALE_KEY = 'locale';

interface AppState {
    fetching: boolean;
    route: ROUTE;
    locale: Locale;
    selectedService?: SERVICE;
}

export class App extends Component<{}, AppState> {
    imageStore = new ImageStore();
    addSelectedService?: (service: SERVICE) => void;

    constructor(props: {}) {
        super(props);

        const storedLocale = localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) as Locale | null;

        this.state = {
            fetching: true,
            route: ROUTE.CONTACT,
            locale: storedLocale ? storedLocale : 'en',
        };
    }

    componentDidMount() {
        this.imageStore.fetchImages().then(_ => {
            this.setState({
                fetching: false,
            });
        });
    }

    handleNavbarActionClick = (route: ROUTE) => {
        this.setState({ route });
    }

    handleLocaleChange = (locale: Locale) => {
        localStorage.setItem(LOCAL_STORAGE_LOCALE_KEY, locale);
        this.setState({ locale });
    }

    handleGoToServicesRoute = () => {
        this.setState({ route: ROUTE.SERVICES });
    }

    handleGoToContactRoute = (service: SERVICE) => {
        if (this.addSelectedService) {
            this.addSelectedService(service);
        }
        this.setState({ route: ROUTE.CONTACT });
    }

    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={messages[this.state.locale]}>
                <div className="app">
                    <Navbar locale={this.state.locale} route={this.state.route} onActionClick={this.handleNavbarActionClick} onLocaleChange={this.handleLocaleChange}/>
                    <RouteCarousel route={this.state.route}>
                        {translateX => [
                            <RouteCarouselHorse key={`route-carousel-horse-${ROUTE.HOME}`} route={ROUTE.HOME} translateX={translateX} >
                                <HomeRoute onGoToServicesRoute={this.handleGoToServicesRoute}/>
                            </RouteCarouselHorse>,
                            <RouteCarouselHorse key={`route-carousel-horse-${ROUTE.ABOUT}`} route={ROUTE.ABOUT} translateX={translateX}>ABOUT</RouteCarouselHorse>,
                            <RouteCarouselHorse key={`route-carousel-horse-${ROUTE.SERVICES}`} route={ROUTE.SERVICES} translateX={translateX}>
                                <ServicesRoute onGoToContactRoute={this.handleGoToContactRoute}/>
                            </RouteCarouselHorse>,
                            <RouteCarouselHorse key={`route-carousel-horse-${ROUTE.PROJECTS}`} route={ROUTE.PROJECTS} translateX={translateX}>PROJECTS</RouteCarouselHorse>,
                        <RouteCarouselHorse key={`route-carousel-horse-${ROUTE.CONTACT}`} route={ROUTE.CONTACT} translateX={translateX}>
                            <ContactRoute>
                                {addSelectedService => {
                                    this.addSelectedService = addSelectedService;
                                    return <></>;
                                }}
                            </ContactRoute>
                        </RouteCarouselHorse>,
                        ]}
                        
                    </RouteCarousel>
                </div>
            </IntlProvider>
        );
    }
}
