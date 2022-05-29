import React from 'react';
import bg from '../assets/bg2.jpg';
import picprof from '../assets/profil.jpeg'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-scroll'
const styles = createUseStyles({
    nama: {
        color: 'black',
    },
    bungkus: {
        alignItems: 'center',
        textAlign: 'center',
        margin: {
            left: 350,
            right: 350,
        },
        padding: {
            top: 50
        }
    },
    latar: {
        padding: {
            bottom: 100
        },

        backgroundSize: "cover",
    },
    prof: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2
    },
    deskripsi: {
        color: 'white',
        fontSize: 20
    },
    navbar: {
        backgroundColor: 'white',
        height: 40,
        fontWeight: '500',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    subnav: {
        display: 'inline',
        "&:hover": {
            background: "#223233",
            color : "white",
            padding: 3,
            borderRadius: 10
        },
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});
function Head() {
    const classes = styles()
    return (
        <div className={classes.latar} style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', }} >
            <div className={classes.navbar}>
                <ul className={classes.nav}>
                    <li className={classes.subnav}>Home</li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}> <Link to="about" spy={true} smooth={true}>About</Link></li>
                    <li className={classes.subnav}> <Link to="skill" spy={true} smooth={true}>Skill</Link></li>
                    <li className={classes.subnav}> <Link to="portofolio" spy={true} smooth={true}>Portofolio</Link></li>
                    <li className={classes.subnav}> <Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                    <li className={classes.subnav}></li>
                </ul>
            </div>
            <div id="about" className={classes.bungkus}>

                <img src={picprof} alt="prof" className={classes.prof} />;
                <h1 className={classes.nama}>Muhammad Aldito Rizki</h1>
                <p className={classes.deskripsi}>Informatics Engineering</p>
                <p className={classes.deskripsi}>Institut Teknologi Sumatera</p>
            </div>
        </div >
    )
}


export default Head

