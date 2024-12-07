import { FaXTwitter, FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";

const ShareButtons = ({url, title, summary}) => {
    const encodedURL = encodeURIComponent(url);
    const encodedText = encodeURIComponent('¡Tienes que leer este artículo!');
    const encodedTitle = encodeURIComponent(title);
    const encodedSummary = encodeURIComponent(summary);

  return (
    <div className='mx-auto'>
        <p className="text-center mb-2">Comparte este artículo:</p>
        <div className='flex gap-5 items-center justify-center'>
            <span className="p-3 shadow bg-blue-600 text-white text-xl lg:text-2xl">
                <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <FaFacebookF />
                </a>
            </span>
            <span className="p-3 shadow bg-black text-white text-xl lg:text-2xl">
                <a
                    href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaXTwitter />
                </a>
            </span>
            <span className="p-3 shadow bg-green-500 text-white text-xl lg:text-2xl">
                <a
                    href={`https://wa.me/?text=${encodedText}%20${encodedURL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                </a>
            </span>
            <span className="p-3 shadow bg-blue-700 text-white text-xl lg:text-2xl">
                <a
                    href={`https://www.linkedin.com/shareArticle?url=${encodedURL}&title=${encodedTitle}&summary=${encodedSummary}&source=www.pickmvp.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
            <FaLinkedinIn />
                </a>
            </span>
        </div>
    </div>
  )
}

export default ShareButtons