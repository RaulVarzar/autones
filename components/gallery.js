import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PHOTOS = [
  'https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRvd2luZ3xlbnwwfHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRvd2luZ3xlbnwwfHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1673187139181-795761a40ca1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1596383765797-8e10e88d1590?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1673187139612-6bf684a74815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
];

const Gallery = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 16,
    mass: 0.2,
  });

  const scale = useTransform(contentSpring, [0, 1], ['85%', '100%']);
  const y = useTransform(contentSpring, [0, 1], ['15vh', '0vh']);

  return (
    <motion.section
      ref={ref}
      style={{ scale, y }}
      class="py-4 px-2 mx-auto sm:py-20 lg:px-6 w-full max-w-screen-2xl"
    >
      <div class="p-5 sm:p-8">
        <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 [&>img:not(:first-child)]:mt-8">
          {PHOTOS.map((photo, i) => (
            <motion.img
              style={{ y: y + i }}
              key={photo}
              src={photo}
              alt={photo}
            />
          ))}
          <img src="https://source.unsplash.com/bYuI23mnmDQ" />
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
