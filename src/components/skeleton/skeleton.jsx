import "./skeleton.css";

const Skeleton = () => {
    return (
        <div className="skeleton">
            <div className="skeleton-img"></div>
            <div className="skeleton-text"></div>
            <div className="grid">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
            </div>
            <div className="size-header"></div>
            <div className="grid-sizes">
                <div className="size"></div>
                <div className="size"></div>
                <div className="size"></div>
                <div className="size"></div>
                <div className="size"></div>
            </div>
        </div>
    );
}

export default Skeleton;
