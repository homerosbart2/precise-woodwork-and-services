import { Image } from '../types/image';

const GET_IMAGES_URL = 'https://www.instagram.com/precise_woodwork_and_services/?__a=1';

interface ImageStoreResponse {
    graphql: {
        user: {
            edge_owner_to_timeline_media: {
                edges: {
                    node: {
                        id: string;
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
                        edge_media_to_caption: {
                            edges: [{
                                node: {
                                    text: string;
                                };
                            }];
                        };
                        edge_sidecar_to_children?: {
                            edges: {
                                node: {
                                    id: string;
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
    imagesByPost: Image[][] = [];

    fetchImages = async (): Promise<boolean> => {
        return new Promise(resolve => {
            fetch(GET_IMAGES_URL).then(response => {
                response.json().then((jsonResponse: ImageStoreResponse) => {
                    [ this.images, this.imagesByPost ] = jsonResponse.graphql.user.edge_owner_to_timeline_media.edges.reduce(
                        (result: [Image[], Image[][]], edge) => {
                            const type = edge.node.__typename;
                            
                            let images: Image[] | undefined;
                            switch (type) {
                                case 'GraphImage':
                                    images = [{
                                        id: edge.node.id,
                                        post_id: edge.node.id,
                                        description: edge.node.edge_media_to_caption.edges[0].node.text,
                                        src: edge.node.thumbnail_src,
                                        ...edge.node.dimensions,
                                    }];
                                    break;
    
                                case 'GraphSidecar':
                                    if (edge.node.edge_sidecar_to_children) {
                                        edge.node.edge_sidecar_to_children.edges.forEach(childEdge => {
                                            const sidecarImage: Image = {
                                                id: `s-${childEdge.node.id}`,
                                                post_id: edge.node.id,
                                                description: edge.node.edge_media_to_caption.edges[0].node.text,
                                                src: childEdge.node.display_url,
                                                ...childEdge.node.dimensions,
                                            };
                                            images = images
                                                ? images.concat(sidecarImage)
                                                : [sidecarImage];
                                        });
                                    }
                                    break;
    
                                case 'GraphVideo':
                                    break;
                            }

                            if (images) {
                                return [
                                    result[0].concat(images),
                                    result[1].concat([images]),
                                ];
                            } else {
                                return result;
                            }
                        },
                        [[],[]],
                    );
    
                    resolve(true);
                });
            });
        });
    }
}