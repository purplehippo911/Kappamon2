
export default function Footer() {
    return (
        <footer className="bg-kappa-green">
            <div className="flex items-center p-4 mt-[3rem]">
                <a href="#" 
                className=""
                >Yo-kard</a>

                <picture className="flex items-center align-center w-1/2 ml-auto">
                    <a 
                        href="https://instagram.com" 
                        className="hover:scale-[1.1]"
                    >
                        <img
                            src="/icons/Instagram icon.png"
                            alt="insta icon"
                            className="w-[60%]"
                        />
                    </a>
                    <a href="https://pinterest.com" target="_blank">
                        <img
                            src="/icons/Pinterest icon.png"
                            alt="Pinterest icon"
                            className="w-[60%]"
                        />
                    </a>
                    <a href="mailto:email@example.com"  target="_blank">
                        <img
                            src="/icons/Letter transparent logo.png"
                            alt="Email icon"
                            className="w-[60%]"
                        />
                    </a>
                    <a href="https://youtube.com" target="_blank">
                        <img
                            src="/icons/Youtube icon.png"
                            alt="Youtube icon"
                            className="w-[60%]"
                        />
                    </a>

                </picture>
            </div>  
        </footer>
    )
}