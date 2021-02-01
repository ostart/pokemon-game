import s from './style.module.css';

const Layout = ({ id, title, urlBg, colorBg, colorTitle, children }) => {
    const sectionStyle = {};
    if (urlBg) sectionStyle.backgroundImage = `url(${urlBg})`;
    if (colorBg) sectionStyle.backgroundColor = colorBg;
    const titleStyle = {};
    if (colorTitle) titleStyle.color = colorTitle;
    return (
        <section className={s.root} style={sectionStyle} id={id}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title} style={titleStyle}>
                        {title && <h3>{title}</h3>}
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;