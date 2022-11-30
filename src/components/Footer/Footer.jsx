import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
      <div className="bg-greenish border-t-2 border-t-beige py-4 px-2 flex items-center justify-center">
      <a
        href="mailto:sarahaboudalal@gmail.com"
        className="mx-4 text-sm font-medium hover:text-beige text-whitish"
      >
       Let's Get in Touch{' '}
          <MdEmail className="h-8 w-4 inline" />
        </a>
      </div>
    );
}