export type PhotoType = {
    urls: {
        regular: string;
    };
    alt_description: string;
    likes: string | number;
    user: {
        name: string;
        portafolio_url: string,
        profile_image: {
            medium: string;
        };
    };
};