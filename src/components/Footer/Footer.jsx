import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
      <div className="bg-whitish border-t-2 border-t-beige py-10 px-2 flex items-center justify-center duration-400">
        <a
          href="mailto:sarahaboudalal@gmail.com"
          className="mx-4 text-lg font-medium hover:text-night hover:bg-beige text-greenish border-2 border-greenish px-2 border-dashed hover:border-solid rounded-sm"
        >
          Let's Get in Touch <MdEmail className="h-6 pb-1 w-6 inline" />
        </a>
      </div>
    );
}