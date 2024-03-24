import { Divider, Text } from '@chakra-ui/react';

export const Hero = ({ title, description }: { title: string, description: string }) => {
  return (
    <>
      <Text
        className="bg-pan-tl"
        bgClip="text"
        fontWeight={700}
        fontSize={{ base: 35, md: 40 }}
        lineHeight={1}
        gap={2}
      >
        {title}
      </Text>

      <Text fontSize={{ base: 12, md: 15 }} color={'text.700'}>
        {description}
      </Text>

      <Divider
        w="60%"
        h="1px"
        border="none"
        bgGradient="linear(to-r, #FFC010, #B24F18)"
      />
    </>
  )
}
