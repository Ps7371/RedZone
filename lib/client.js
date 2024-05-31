import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client=sanityClient({
    // projectId:"f4k91s8j",
    projectId:"2b4etqs9",
    dataset:"production",
    apiVersion:'2022-10-09',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})
const builder =imageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source)