import { Image } from '../types/image';

const GET_IMAGES_URL = 'https://www.instagram.com/precise_woodwork_and_services/?__a=1';

interface ImageStoreResponse {
    graphql: {
        user: {
            edge_owner_to_timeline_media: {
                edges: {
                    node: {
                        __typename: 'GraphVideo' | 'GraphSidecar' | 'GraphImage';
                        dimensions: {
                            width: number;
                            height: number;
                        };
                        thumbnail_src: string;
                        thumbnail_resources: {
                            config_height: number;
                            config_width: number;
                            src: string;
                        }[];
                        edge_sidecar_to_children?: {
                            edges: {
                                node: {
                                    display_url: string;
                                    dimensions: {
                                        width: number;
                                        height: number;
                                    };
                                };
                            }[];
                        };
                    };
                }[];
            };
        };
    };
}

export class ImageStore {
    images: Image[] = [];

    fetchImages = async (): Promise<boolean> => {
        return new Promise(resolve => {
            fetch(GET_IMAGES_URL).then(response => {
                response.json().then((jsonResponse: ImageStoreResponse) => {
                    this.images = jsonResponse.graphql.user.edge_owner_to_timeline_media.edges.reduce(
                        (images: Image[], edge) => {
                            const type = edge.node.__typename;
    
                            switch (type) {
                                case 'GraphImage':
                                    images.push({
                                        src: edge.node.thumbnail_src,
                                        ...edge.node.dimensions,
                                    });
                                    break;
    
                                case 'GraphSidecar':
                                    if (edge.node.edge_sidecar_to_children) {
                                        edge.node.edge_sidecar_to_children.edges.forEach(childEdge => {
                                            images.push({
                                                src: childEdge.node.display_url,
                                                ...childEdge.node.dimensions,
                                            });
                                        });
                                    }
                                    break;
    
                                case 'GraphVideo':
                                    break;
                            }
    
                            return images;
                        },
                        [],
                    );
    
                    resolve(true);
                });
            });
        });
    }
}