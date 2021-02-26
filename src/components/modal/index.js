import './modal.scss';

const Modal = ({parentRef, handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div id="model" className={showHideClassName} ref={parentRef} onClick={handleClose}>
            <section className="modal-main">
                {children}
            </section>
        </div>
    );
};

export default Modal;