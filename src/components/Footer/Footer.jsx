import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
      <div className="bg-whitish border-t-2 border-t-beige py-10 px-2 flex items-center justify-center">
      <a
        href="mailto:sarahaboudalal@gmail.com"
        className="mx-4 text-md font-medium hover:text-night text-greenish"
      >
       Let's Get in Touch{' '}
          <MdEmail className="h-8 w-4 inline" />
        </a>
      </div>
    );
}