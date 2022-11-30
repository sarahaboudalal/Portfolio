import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
      <div className="bg-greenish border-t-2 border-t-beige py-4 px-2 flex flex-row items-center justify-center">
        <p className="text-center text-beige font-medium">Let's Get in Touch</p>{' '}
        <a
          href="mailto:sarahaboudalal@gmail.com"
          className="mx-4 text-sm font-medium hover:text-beige text-whitish"
        >
          <MdEmail className="h-8 w-4" />
        </a>
      </div>
    );
}