import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { en } from './lang/en';
import { es } from './lang/es';
import { Navbar } from './components/navbar';
import { ROUTE } from './types/route';
import { RouteCarousel } from './components/route-carousel';
import { RouteCarouselHorse } from './components/route-carousel/route-carousel-horse';
import { Locale } from './types/locale';
import { ServicesRoute } from './components/services-route';
import { HomeRoute } from './components/home-route';
import { ContactRoute } from './components/contact-route';
import { SERVICE } from './types/service';
import { ProjectsRoute } from './components/projects-route';
import { AboutRoute } from './components/about-route';
import { FontAwesomeLibrary } from './util/font-awesome-library';

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
    addSelectedService?: (service: SERVICE) => void;

    constructor(props: {}) {
        super(props);

        FontAwesomeLibrary.initializeFontAwesomeLibrary();

        const storedLocale = localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) as Locale | null;

        this.state = {
            fetching: true,
            route: ROUTE.HOME,
            locale: storedLocale ? storedLocale : 'en',
        };
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
                    <Navbar
                        locale={this.state.locale}
                        route={this.state.route}
                        onActionClick={this.handleNavbarActionClick}
                        onLocaleChange={this.handleLocaleChange}
                    />
                    <RouteCarousel route={this.state.route}>
                        {translateX => [
                            <RouteCarouselHorse
                                key={`route-carousel-horse-${ROUTE.HOME}`}
                                route={ROUTE.HOME}
                                translateX={translateX}
                            >
                                <HomeRoute
                                    onGoToServicesRoute={this.handleGoToServicesRoute}
                                    shown={this.state.route === ROUTE.HOME}
                                />
                            </RouteCarouselHorse>,
                            <RouteCarouselHorse
                                key={`route-carousel-horse-${ROUTE.ABOUT}`}
                                route={ROUTE.ABOUT}
                                translateX={translateX}
                            >
                                <AboutRoute/>
                            </RouteCarouselHorse>,
                            <RouteCarouselHorse
                                key={`route-carousel-horse-${ROUTE.SERVICES}`}
                                route={ROUTE.SERVICES}
                                translateX={translateX}
                            >
                                <ServicesRoute
                                    onGoToContactRoute={this.handleGoToContactRoute}
                                    shown={this.state.route === ROUTE.SERVICES}
                                />
                            </RouteCarouselHorse>,
                            <RouteCarouselHorse
                                key={`route-carousel-horse-${ROUTE.PROJECTS}`}
                                route={ROUTE.PROJECTS}
                                translateX={translateX}
                            >
                                <ProjectsRoute/>
                            </RouteCarouselHorse>,
                            <RouteCarouselHorse
                                key={`route-carousel-horse-${ROUTE.CONTACT}`}
                                route={ROUTE.CONTACT}
                                translateX={translateX}
                            >
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
