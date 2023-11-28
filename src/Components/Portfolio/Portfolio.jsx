import * as React from 'react';
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Dashboard1 from "../../img/db1.png"
import Dashboard2 from "../../img/db2.jpeg"
import Dashboard3 from "../../img/db3.png"
import EOP from "../../img/eops.png"
import EOP1 from "../../img/eops1.png"
import EOP2 from "../../img/eops2.png"
import EOP3 from "../../img/eops3.png"
import EOP4 from "../../img/eops4.png"
import EOP5 from "../../img/eops5.png"
import EOP6 from "../../img/eops6.png"
import EOP7 from "../../img/eops7.png"
import MSMART from "../../img/msmart.jpeg"
import MSMART1 from "../../img/msmart1.png"
import MSMART2 from "../../img/msmart2.png"
import MSMART3 from "../../img/msmart3.png"
import MSMART4 from "../../img/msmart4.png"
import MSMART5 from "../../img/msmart5.png"
import MSMART6 from "../../img/msmart6.png"

import CMONITOR from "../../img/cmonitor.png"
import CMONITOR1 from "../../img/cmonitor1.png"
import CMONITOR2 from "../../img/cmonitor2.png"
import CMONITOR3 from "../../img/cmonitor3.png"

import sidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'
// import 'swiper/css '
import { themeContext } from '../../Context';
import { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Component } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
function Portfolio() {
    const [open1, setOpen1] = React.useState(false);
    const [selectedImage1, setSelectedImage1] = React.useState(null);
    const [open2, setOpen2] = React.useState(false);
    const [selectedImage2, setSelectedImage2] = React.useState(null);
    const [open3, setOpen3] = React.useState(false);
    const [selectedImage3, setSelectedImage3] = React.useState(null);
    const [open4, setOpen4] = React.useState(false);
    const [selectedImage4, setSelectedImage4] = React.useState(null);
    const [open5, setOpen5] = React.useState(false);
    const [selectedImage5, setSelectedImage5] = React.useState(null);
    const [open6, setOpen6] = React.useState(false);
    const [selectedImage6, setSelectedImage6] = React.useState(null);
    const [open7, setOpen7] = React.useState(false);
    const [selectedImage7, setSelectedImage7] = React.useState(null);
    const [open8, setOpen8] = React.useState(false);
    const [selectedImage8, setSelectedImage8] = React.useState(null);
    const [open9, setOpen9] = React.useState(false);
    const [selectedImage9, setSelectedImage9] = React.useState(null);
    const [open10, setOpen10] = React.useState(false);
    const [selectedImage10, setSelectedImage10] = React.useState(null);
    const [open11, setOpen11] = React.useState(false);
    const [selectedImage11, setSelectedImage11] = React.useState(null);
    const [open12, setOpen12] = React.useState(false);
    const [selectedImage12, setSelectedImage12] = React.useState(null);
    const [open13, setOpen13] = React.useState(false);
    const [selectedImage13, setSelectedImage13] = React.useState(null);
    const [open14, setOpen14] = React.useState(false);
    const [selectedImage14, setSelectedImage14] = React.useState(null);
    const [open15, setOpen15] = React.useState(false);
    const [selectedImage15, setSelectedImage15] = React.useState(null);
    const [open16, setOpen16] = React.useState(false);
    const [selectedImage16, setSelectedImage16] = React.useState(null);
    const [open17, setOpen17] = React.useState(false);
    const [selectedImage17, setSelectedImage17] = React.useState(null);
    const [open18, setOpen18] = React.useState(false);
    const [selectedImage18, setSelectedImage18] = React.useState(null);
    const [open19, setOpen19] = React.useState(false);
    const [selectedImage19, setSelectedImage19] = React.useState(null);


    const handleOpen2 = (image) => {
        setSelectedImage2(image);
        setOpen2(true);
    };

    const handleClose1 = () => {
        setSelectedImage1(null);
        setOpen1(false);
    };
    const handleOpen1 = (image) => {
        setSelectedImage1(image);
        setOpen1(true);
    };

    const handleClose2 = () => {
        setSelectedImage2(null);
        setOpen2(false);
    };
    const handleOpen3 = (image) => {
        setSelectedImage3(image);
        setOpen3(true);
    };

    const handleClose3 = () => {
        setSelectedImage3(null);
        setOpen3(false);
    };
    const handleOpen4 = (image) => {
        setSelectedImage4(image);
        setOpen4(true);
    };

    const handleClose4 = () => {
        setSelectedImage4(null);
        setOpen4(false);
    };
    const handleOpen5 = (image) => {
        setSelectedImage5(image);
        setOpen5(true);
    };

    const handleClose5 = () => {
        setSelectedImage5(null);
        setOpen5(false);
    };
    const handleOpen6 = (image) => {
        setSelectedImage6(image);
        setOpen6(true);
    };

    const handleClose6 = () => {
        setSelectedImage6(null);
        setOpen6(false);
    };
    const handleOpen7 = (image) => {
        setSelectedImage7(image);
        setOpen7(true);
    };

    const handleClose7 = () => {
        setSelectedImage7(null);
        setOpen7(false);
    };
    const handleOpen8 = (image) => {
        setSelectedImage8(image);
        setOpen8(true);
    };

    const handleClose8 = () => {
        setSelectedImage8(null);
        setOpen8(false);
    };
    const handleOpen9 = (image) => {
        setSelectedImage9(image);
        setOpen9(true);
    };

    const handleClose9 = () => {
        setSelectedImage9(null);
        setOpen9(false);
    };
    const handleOpen10 = (image) => {
        setSelectedImage10(image);
        setOpen10(true);
    };

    const handleClose10 = () => {
        setSelectedImage10(null);
        setOpen10(false);
    };
    const handleOpen11 = (image) => {
        setSelectedImage11(image);
        setOpen11(true);
    };

    const handleClose11 = () => {
        setSelectedImage11(null);
        setOpen11(false);
    };
    const handleOpen12 = (image) => {
        setSelectedImage12(image);
        setOpen12(true);
    };

    const handleClose12 = () => {
        setSelectedImage12(null);
        setOpen12(false);
    };
    const handleOpen13 = (image) => {
        setSelectedImage13(image);
        setOpen13(true);
    };

    const handleClose13 = () => {
        setSelectedImage13(null);
        setOpen13(false);
    };
    const handleOpen14 = (image) => {
        setSelectedImage14(image);
        setOpen14(true);
    };

    const handleClose14 = () => {
        setSelectedImage14(null);
        setOpen14(false);
    };
    const handleOpen15 = (image) => {
        setSelectedImage15(image);
        setOpen15(true);
    };

    const handleClose15 = () => {
        setSelectedImage15(null);
        setOpen15(false);
    };



    const handleOpen16 = (image) => {
        setSelectedImage16(image);
        setOpen16(true);
    };

    const handleClose16 = () => {
        setSelectedImage16(null);
        setOpen16(false);
    };

    const handleOpen17 = (image) => {
        setSelectedImage17(image);
        setOpen17(true);
    };

    const handleClose17 = () => {
        setSelectedImage17(null);
        setOpen17(false);
    };

    const handleOpen18 = (image) => {
        setSelectedImage18(image);
        setOpen18(true);
    };

    const handleClose18 = () => {
        setSelectedImage18(null);
        setOpen18(false);
    };

    const handleOpen19 = (image) => {
        setSelectedImage19(image);
        setOpen19(true);
    };

    const handleClose19 = () => {
        setSelectedImage19(null);
        setOpen19(false);
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    const handleCardClick1 = () => {
        window.open('http://117.20.28.178:8037/', '_blank'); // Opens the link in a new tab
    };
    const handleCardClick2 = () => {
        window.open('http://117.20.28.178:8040/', '_blank'); // Opens the link in a new tab
    };
    const handleCardClick3 = () => {
        window.open('http://117.20.28.178:8044/', '_blank'); // Opens the link in a new tab
    };
    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={{ color: darkMode ? "white" : '' }}>Recent <span style={{ color: "#FCA61F", fontSize: '2.5rem' }}>Projects</span> </span>
            {/* <span>Portfolio</span> */}

            <div className="E-cards" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2rem', marginBottom: '2rem', width: '100%' }}>
                <Card sx={{
                    maxWidth: 380, height: 525,
                    boxShadow: '10px 15px 30px rgba(10, 0, 0, 0.2)', // Add a subtle shadow
                    transition: 'transform 0.2s ease-in-out', // Add a slight animation
                    '&:hover': {
                        transform: 'scale(1.05)', // Scale up on hover for a subtle zoom effect
                    },
                    borderRadius: 4,

                }}>
                    <CardActionArea
                        onClick={handleCardClick1}
                    >
                        <CardMedia
                            component="img"
                            height="180"
                            image={Dashboard1}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.2rem' }}>
                                e-Operations - Web Portal
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                                The e-Operations web portal, a component of the Power Sector Improvement Activities (PSIA), served as a role-based interface for field operations. It facilitated workflow processing for services initiated through MEPCO Smart. The portal integrated with other solutions, like CCMS and Billing, through APIs and featured an interactive dashboard with hierarchical statistics for MEPCO's divisions. Notably, it included the E-File, a comprehensive digital document tracking connection history and all services throughout its lifespan.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
                <Card sx={{
                    maxWidth: 380, marginLeft: '3%', height: 525,
                    boxShadow: '10px 15px 30px rgba(10, 0, 0, 0.2)', // Add a subtle shadow
                    transition: 'transform 0.2s ease-in-out', // Add a slight animation
                    '&:hover': {
                        transform: 'scale(1.05)', // Scale up on hover for a subtle zoom effect
                    },
                    borderRadius: 4
                }}>
                    <CardActionArea
                        onClick={handleCardClick2}
                    >
                        <CardMedia
                            component="img"
                            height="180"
                            image={Dashboard2}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.2rem' }}>
                                MEPCO Smart - Web Portal
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                                The Mepco smart portal is a web interface developed as part of the Power Sector Improvement Activities (PSIA). It provides power consumers with smart monitoring features such as load profile, power outage information, consumption trends, and payment trends. The portal utilizes Highcharts.js to display interactive graphs and incorporates Formik and Yup for requesting various power services like new connections, attribute changes, meter replacements, due date extensions, and more.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
                <Card sx={{
                    maxWidth: 380, marginLeft: '3%', height: 525,
                    boxShadow: '10px 15px 30px rgba(10, 0, 0, 0.2)', // Add a subtle shadow
                    transition: 'transform 0.2s ease-in-out', // Add a slight animation
                    '&:hover': {
                        transform: 'scale(1.05)', // Scale up on hover for a subtle zoom effect
                    },
                    borderRadius: 4
                }}>
                    <CardActionArea
                        onClick={handleCardClick3}
                    >
                        <CardMedia
                            component="img"
                            height="180"
                            image={Dashboard3}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.2rem' }}>
                                Citizen Monitor - Web Portal
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                                An admin portal to display hierarchical dashboard stats of theft case along with role based operations on the submitted electricity theft case developed during the anti-theft campaign launched by ministry of energy (MoE) power division of Pakistan.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
            </div>
            {/* swipper */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                grabCursor={true}
                // pagination={{
                //     clickable: true,
                // }}
                // modules={[Pagination]}
                className="portfolio-slider"
            >
                <SwiperSlide><img src={EOP} onClick={() => handleOpen1(EOP)} />
                    <Dialog open={open1} onClose={handleClose1} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose1}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage1} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={EOP1} onClick={() => handleOpen2(EOP1)} />
                    <Dialog open={open2} onClose={handleClose2} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose2}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage2} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={EOP2} onClick={() => handleOpen3(EOP2)} />
                    <Dialog open={open3} onClose={handleClose3} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose3}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage3} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={EOP3} onClick={() => handleOpen4(EOP3)} />
                    <Dialog open={open4} onClose={handleClose4} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose4}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage4} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={EOP4} onClick={() => handleOpen5(EOP4)} />
                    <Dialog open={open5} onClose={handleClose5} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose5}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage5} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={EOP5} onClick={() => handleOpen6(EOP5)} />
                    <Dialog open={open6} onClose={handleClose6} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose6}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage6} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={EOP6} onClick={() => handleOpen7(EOP6)} />
                    <Dialog open={open7} onClose={handleClose7} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose7}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage7} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={EOP7} onClick={() => handleOpen8(EOP7)} />
                    <Dialog open={open8} onClose={handleClose8} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose8}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage8} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={MSMART} onClick={() => handleOpen9(MSMART)} />
                    <Dialog open={open9} onClose={handleClose9} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose9}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage9} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={MSMART1} onClick={() => handleOpen10(MSMART1)} />
                    <Dialog open={open10} onClose={handleClose10} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose10}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage10} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={MSMART2} onClick={() => handleOpen11(MSMART2)} />
                    <Dialog open={open11} onClose={handleClose11} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose11}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage11} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={MSMART3} onClick={() => handleOpen12(MSMART3)} />
                    <Dialog open={open12} onClose={handleClose12} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose12}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage12} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={MSMART4} onClick={() => handleOpen13(MSMART4)} />
                    <Dialog open={open13} onClose={handleClose13} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose13}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage13} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={MSMART5} onClick={() => handleOpen14(MSMART5)} />
                    <Dialog open={open14} onClose={handleClose14} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose14}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage14} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={MSMART6} onClick={() => handleOpen15(MSMART6)} />
                    <Dialog open={open15} onClose={handleClose15} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose15}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage15} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={CMONITOR} onClick={() => handleOpen16(CMONITOR)} />
                    <Dialog open={open16} onClose={handleClose16} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose16}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage16} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={CMONITOR1} onClick={() => handleOpen17(CMONITOR1)} />
                    <Dialog open={open17} onClose={handleClose17} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose17}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage17} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={CMONITOR2} onClick={() => handleOpen18(CMONITOR2)} />
                    <Dialog open={open18} onClose={handleClose18} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose18}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage18} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                <SwiperSlide><img src={CMONITOR3} onClick={() => handleOpen19(CMONITOR3)} />
                    <Dialog open={open19} onClose={handleClose19} maxWidth="md" fullWidth>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose19}
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent>
                            {/* Content for the pop-up when clicking */}
                            <img src={selectedImage19} alt="Selected" style={{ width: '100%' }} />
                        </DialogContent>
                    </Dialog>
                </SwiperSlide>
                
          

            </Swiper>

        </div>
    );
}

export default Portfolio;
