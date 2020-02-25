import React, {useState, useEffect} from 'react';
import styles from './sideMenuItem.module.css'
import { NavLink, withRouter } from 'react-router-dom'
import { ReactComponent as Drop } from '../../../assets/images/dropdown.svg'


const SideMenuItem = ({ svg: Svg, text, children, notifCount, open, openFunc, path , match}) => {
    const textClasses = open ? [styles.textContainer, styles.textOpen] : [styles.textContainer]
    const backgroundClasses = open ? [styles.itemBackground] : [styles.itemBackground, styles.closed]

    //if any ot the kids are a match set this to true which make the background's opacity become 1
    const [urlMatch, setUrlMatch] = useState(false)

    // if any of the kids are a match then set this state to the index
    const [activeIdx, setActiveIdx] = useState(0)

   // the expand state
    const [expanded, setExpanded] = useState(false)
   // when the above is set to false the backgroundMoves to its original position

    useEffect(() => {
            if(children){
                for(let i = 0; i < children.length; i++){
                  if(children[i].urlTarget === match.path){
                      setUrlMatch(true)
                      setActiveIdx(i + 1)
                      break
                  }
                }
            }
    }, []);

    useEffect(()=> {
        if(!open){
            setExpanded(false)
        }
    }, [open])

    // useEffect(() => {
    //     const targetBackground = document.querySelector(styles.)
    // })




    const openFuncFinal = () => {
        openFunc(true)
        setExpanded(!expanded)
    }
    const value = (activeIdx * 45) + 15;
    const backgroundComputedStyling = {
        opacity: urlMatch ? 1 : 0,
        height: expanded ? '45px' : open ? '61px' : '40px',
        transform: expanded ? `translateY(${value}px)` : open ? `translate(0)` : "translate(-50%, -50%)",
    }



    // if you have kids check which of the kids match the url find its index and use it to push down the background container by a bit
    // when the sidebar is closed the background should go back to its top
    // only when you have kids should the onclick even open the side bar


    return (
        <>
            { path ? <NavLink to={path} activeClassName={styles.active} className={styles.link} >
                <div className={open ? styles.SideMenuItem : [styles.SideMenuItem, styles.hideBar].join(' ')} >
                    <div className={backgroundClasses.join(' ')}>  </div>
                    <div className={styles.mainLinkPart}>
                        <Svg/>
                        <div className={textClasses.join(' ')}>
                                <span> { text } </span>
                                { children ? <div className={styles.guitarPick}/> : null }
                        </div>
                    </div>
                    <hr/>
                </div>
            {/*  url match and !expand then your color should be blue  so also should your svg */}
            </NavLink> : <div className={open ? urlMatch && (expanded === false) ? [styles.SideMenuItem, styles.hideBar, styles.SideMenuItemActiveClass].join(' ') : [styles.SideMenuItem, styles.hideBar].join(' ') :
                (urlMatch && (expanded === false)) ? [styles.SideMenuItem, styles.SideMenuItemActiveClass].join(' ') : styles.SideMenuItem}  onClick={ children ? () => openFuncFinal() : () => {} }>
                <div className={backgroundClasses.join(' ')} style={ backgroundComputedStyling }/>
                <div className={styles.mainLinkPart}>
                    <Svg/>
                    <div className={textClasses.join(' ')}>
                        <div className={styles.actualText}>
                            <span> { text } </span>
                            { children ? <Drop/> : null }
                        </div>
                    </div>
                </div>
                { children ? <div className={styles.innerLinks} style={expanded ? { height: `${45 * children.length}px`, transform: 'scaleY(1)' } : null } onClick={ children ? () => openFunc() : () => {} }>
                    { children.map(child => {
                        return (<NavLink to={child.urlTarget} className={styles.smallLink} activeClassName={styles.activeSmallLinky}>
                            <div className={styles.childLink}>
                                <span> {child.name} </span>
                                {child.notifCount ? <div className={styles.notifCount}> {child.notifCount} </div> : null }
                            </div>
                        </NavLink>)
                    }) }
                </div> : null }
                <hr/>
            </div> }
        </>
    );
};

export default withRouter(SideMenuItem);