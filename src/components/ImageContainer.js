import { Image } from "@chakra-ui/react";

export default function ImageContainer({ src, width, height }) {
    return (
        <Image
            minH={height ? height : '200px'}
            maxH={height ? height : '200px'}
            // minW='full'
            objectFit='cover'
            src={src}
            alt='image'
            borderRadius='lg'
            pointerEvents='none'
        />
    )
}