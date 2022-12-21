import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

const First = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={0.25}></Grid>
                <Grid item xs={0.75}><Image src="/ecellLogo.png" width={100} height={100} /></Grid>
                <Grid item xs={10}></Grid>
                <Grid item xs={1}></Grid>
            </Grid>
            <br /><br /><br /><br /><br />
            <Grid container className='text-offwhite font-bold text-7xl text-base text-center' justifyContent="center">E-SUMMIT 2023</Grid>
            <br /><br /><br />
            <Grid container className='text-lightBlue font-bold text-6xl text-center' justifyContent="center">THE ARDUOUS CARREFOUR</Grid>
            <br /><br />

            <br /><br /><br /><br /><br /><br /><br />

            <Grid container>
                <Grid item xs={12} md={2} justifyContent="center">
                    <div className='flex justify-center'>
                        <a
                            className='m-1 w-7'
                            href="https://www.instagram.com/ecell_iith/?hl=en"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                src="/instagram0icon.svg"
                                alt="Instagram Link"
                                width="40"
                                height="40"
                            />
                        </a>
                        <a
                            className='m-1 w-7'
                            href="https://in.linkedin.com/company/entrepreneurship-cell-iit-hyderabad"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                src="/linkedin-icon.svg"
                                alt="Linkedin link"
                                width="40"
                                height="40"
                            />
                        </a>
                        <a
                            className='m-1 w-7'
                            href="https://twitter.com/ecell_iith"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                src="/twitter-icon.svg"
                                alt="Twitter Link"
                                width="40"
                                height="40"
                            />
                        </a>
                        <a
                            className='m-1 w-7'
                            href="https://www.facebook.com/ecell.iithyd/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                src="/facebook-icon.svg"
                                alt="Facebook Link"
                                width="40"
                                height="40"
                            />
                        </a>
                        <a
                            className='m-1 w-7'
                            href="https://www.youtube.com/user/ecelliithyderabad"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                src="/youtube-icon.svg"
                                alt="Youtube Link"
                                width="40"
                                height="40"
                            />
                        </a>
                    </div>
                </Grid>
                <Grid item md={10}></Grid>
            </Grid>
            <br /><br /><br /><br /><br /><br /><br />
            <Grid container className='text-blue text-4xl' justifyContent="center">ABOUT US</Grid>
            <br /><br />
            <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item container xs={4} className="text-white text-base text-center">E-Summit is the flagship event of E-Cell IITH which aims to bring early entrepreneurs, students, corporates, venture capitalists and start-ups with burgeoning ideas from all over the country to one platform sharing their entrepreneur ventures and wisdom.<br />
                    This summit provides a medium for healthy discussions and inculcates an entrepreneurial mindset into minds through a plethora of events like debates and panel discussion. We aim to provide a competitive environment for start-ups via events like Elevator Pitch, Pitch Showdown and many more events to commemorate the spirit of entrepreneurship.</Grid>
                <Grid item xs={4}></Grid>
            </Grid>
            <br /><br /><br /><br /><br /><br /><br />
            <Grid container className='text-blue text-4xl' justifyContent="center">THEME</Grid>
            <br /><br />
            <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item container xs={4} className="text-white text-base text-center">It has been over a year since the pandemic hit the world. Amidst countless challenges and uncertainties, many individuals and companies were quite phenomenal, as they succeeded in sustaining and reviving their businesses.
                    India has witnessed 28 new unicorns just this year, making the total unicorn count go up to 66! This marks a veritable triumph over the COVID-19 outbreak.<br /><br />

                    With “Exordium of Resurgence” as the theme, our objective is to explore the steps and strategies that have helped businesses pick up prospects and opportunities for entrepreneurial roles in the post COVID era.</Grid>
                <Grid item xs={4}></Grid>
            </Grid>
            <br /><br /><br /><br /><br />

        </div>
    )
}

export default First