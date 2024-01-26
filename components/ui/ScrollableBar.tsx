import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function ScrollableBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 4,
    },
  };
  return (
    <Carousel containerClass='flex gap-4 w-full' responsive={responsive}>
      {children}
    </Carousel>
  );
}
