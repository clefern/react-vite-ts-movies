const Logo = ({ alt = "", ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img alt={alt} {...props} />;
};

export default Logo;