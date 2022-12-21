import React from 'react'
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

const Last = () => {
    return (
        <div className='text-dark'>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item conatainer xs={2} justifyContent="center">
                    <ul className='text-white text-xl font-bold' >Quick Links</ul>
                    <br />
                    <ul >
                        <li className='text-white'>
                            <Link href="https://tanmayshah07.github.io/E-CELL-IITH-Startup/">
                                Notable Start-Ups
                            </Link>
                        </li>
                        <li className='text-white'>
                            <Link href="/Team">
                                Team
                            </Link>
                        </li>
                        <li className='text-white'>
                            <Link href="http://caprogram-ecell-iith.netlify.app/">
                                CA Programme
                            </Link>
                        </li>
                        <li className='text-white'>
                            <Link href="http://esummit-ecell-iith.netlify.app/">
                                E-Summit
                            </Link>
                        </li>
                    </ul>

                </Grid>
                <Grid item container xs={2} justifyContent="center">
                    <div>
                        <div className='flex justify-center'>
                            <Image className='w-24'
                                src="/ecellLogo.png"
                                alt="Ecell IITH"
                                width={230}
                                height={80}
                            />
                        </div>
                        <br />
                        <div className='text-white text-center'>THINK | BUILD | INSPIRE</div>
                        <br />
                        <div className='flex justify-center'>
                            <div>
                                <Link href="https://www.instagram.com/ecell_iith/?hl=en">

                                    <Image
                                        className='w-5 m-1'
                                        src="/instagram0icon.svg"
                                        width="5"
                                        height="5"
                                        alt="Ecell IITH Instagram"

                                    />

                                </Link>
                            </div>
                            <div>
                                <Link href="https://in.linkedin.com/company/entrepreneurship-cell-iit-hyderabad">

                                    <Image className='w-5 m-1'
                                        src="/linkedin-icon.svg"
                                        width="5"
                                        height="5"
                                        alt="Ecell IITH Linkedin"
                                    />

                                </Link>
                            </div>
                            <div>
                                <Link href="https://twitter.com/ecell_iith">

                                    <Image className='w-5 m-1'
                                        src="/twitter-icon.svg"
                                        width="5"
                                        height="5"
                                        alt="Ecell IITH Twitter"
                                    />

                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.facebook.com/ecell.iithyd/">

                                    <Image className='w-5 m-1'
                                        src="/facebook-icon.svg"
                                        width="5"
                                        height="5"
                                        alt="Ecell IITH Facebook"
                                    />

                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.youtube.com/user/ecelliithyderabad">

                                    <Image className='w-5 m-1'
                                        src="/youtube-icon.svg"
                                        width="2"
                                        height="2"
                                        alt="Ecell IITH Youtube"
                                    />

                                </Link>
                            </div>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={0.5}></Grid>
                <Grid item container xs={2}>
                    <ul className='bold text-white flex text-xl font-bold'>
                        Contact us
                    </ul>
                    <br /><br />
                    <div className='flex'>
                        <div>
                            <Image className='w-9'
                                src="/location.png"
                                width="50"
                                height="50"
                                alt="location"
                            />
                        </div>
                        <div className='text-white'>
                            E-Cell Office C-714, Academic block C, IIT Hyderabad
                        </div>
                    </div>
                    <div className='flex '>
                        <div>
                            <Image className='w-13'
                                src="/msg.png"
                                width="60"
                                height="60"
                                alt="dot"
                            />
                        </div>
                        <div className='text-white'>
                            ecell@iith.ac.in
                        </div>
                    </div>
                    <div className='flex '>
                        <div>
                            <Image className='w-13'
                                src="/calll.png"
                                width="60"
                                height="60"
                                alt="dial"
                            />
                        </div>
                        <div className='text-white'>
                            (+91)8979471587
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.5}></Grid>

            </Grid>
            <br /><br /><br /><br /><br />
        </div>
    )
}

export default Last