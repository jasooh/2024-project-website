import { Text } from '@chakra-ui/react';
import HomeSection from '../components/HomeSection';

import Colors from '../const/Colors.json';

export default function About() {
    return (
        <HomeSection>
            <Text
                fontSize='17px'
                width='40%' height='max' maxH='50%'
                mt='3rem'
            >
                <font color={Colors['yellow']}>Lorem ipsum dolor sit amet.</font> Quo cupiditate perspiciatis est reiciendis reprehenderit et enim internos hic suscipit repudiandae. Ex laborum dolorum est voluptatem fuga eum rerum soluta sed eius iusto. <br /><br />
                Eum placeat dolores ea unde recusandae quo omnis Quis. Ut veniam alias sit eaque nostrum et necessitatibus nostrum. <br /><br />
                Duis luctus varius nisi, eu aliquet ex gravida eget. Etiam quis mauris sit amet purus dictum blandit ut ac risus. Maecenas ac porttitor orci, sed bibendum elit. Donec ac metus odio. Quisque lacinia, justo vitae ullamcorper vehicula, tellus mauris imperdiet nulla, porta sollicitudin tellus orci non nunc.
            </Text>
        </HomeSection>
    )
}