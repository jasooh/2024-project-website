import { Image } from "@chakra-ui/react";

export default function ImageContainer({ src }) {
    return (
        <Image
            minH='200px'
            maxH='200px'
            aspectRatio='1'
            minW='full'
            objectFit='cover'
            src={src}
            alt='image'
            borderRadius='lg'
            pointerEvents='none'
        />
    )
}