import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import './About.css'

const About = () => {
    const vinyl = require('./vinyl.png');
    return (
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 5,
          maxWidth: '90%',
          height: 'auto',
          padding: 8,
        },
      }}
    >
      <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={vinyl} className='rot' alt='vinyl'/>
          <Typography variant='h4' mt={3} sx={{textAlign: 'center'}}>About Us</Typography>
          <Typography variant='subtitle1' mt={2} sx={{textAlign: 'center'}}>
             Sinatra Store  was conceived in 2007 at a gathering of independent record store owners and employees as a way to celebrate and spread the word about the unique culture surrounding nearly 1400 independently owned record stores in the US and thousands of similar stores internationally. 
             The first Record Store Day took place on April 19, 2008. Today there are Record Store Day participating stores on every continent except Antarctica.
             </Typography>
             <Typography variant='body1' sx={{my: 3, textAlign: 'center'}}> 
            This is a day for the people who make up the world of the record store—the staff, the customers, and the artists—to come together and celebrate the unique culture of a record store and the special role these independently owned stores play in their communities. Special vinyl and CD releases and various promotional products are made exclusively for the day. Festivities include performances, cook-outs, body painting, meet & greets with artists, parades, DJs spinning records, and on and on. In 2008 a small list of titles was released on Record Store Day and that list has grown to include artists and labels both large and small, in every genre and price point. For several years, 60% or more of the Record Store Day Official Release List came from independent labels and distributors. The list continues to include a wide range of artists, covering the diverse taste of record stores and their customers. On the first Record Store Day, Metallica spent hours at Rasputin Music in San Francisco meeting their fans and now each year hundreds of artists, internationally famous and from the block, flock to record stores around the world for performances, signings, meet and greets and to fill their own shopping bags with music. In 2009, Jesse "Boots Electric" Hughes (Eagles of Death Metal) declared himself the "Record Store Day Ambassador" as a way of shouting out how important the stores were to artists and since then Joshua Homme (Eagles of Death Metal, Them Crooked Vultures, Queens of the Stone Age), Ozzy Osbourne, Iggy Pop, Jack White, Chuck D, Dave Grohl, Metallica, St. Vincent, Run The Jewels, Pearl Jam and Brandi Carlile have worn the ceremonial sash. The Record Store Day Ambassador for 2021 will be announced soon! 
            </Typography>
            <Typography variant='body1' sx={{textAlign: 'center'}}> 
            Throughout its 13 years, cities across the United States, including New York City, Los Angeles, Boise, Charleston, Raleigh and Las Vegas have declared Record Store Day an official holiday. In 2013, Co-Founder Michael Kurtz was made a Chevalier of the Ordre Des Arts et Des Letters in France, honoring Record Store Day's contribution to the cultural and artistic life of the French people. That same year, the organizers of Record Store Day accepted the Independent Spirit Award from NARM (now the Music Biz Association). In 2015, Record Store Day was named the Marketplace Ally of the Year by A2IM, an organization of independent music labels. While there’s only one Record Store Day a year, the organization works with both independent and major labels throughout the year to create contests, special releases and promotions in order to spotlight the benefits of supporting these independent, locally owned stores with music purchases throughout the year.   In 2010, Record Store Day coordinated its first RSD Black Friday event, which gives record stores exclusive releases as part of the attempt to redirect the focus of the biggest shopping day of the year to the desirable, special things to be found at local stores.
            In 2016, Record Store Day created Summer Camp, a conference devoted to the unique business that is the independent record store. The conference provides a place for record store owners and staff to meet and interact with labels, distribution, vendors and anyone whose work places them in the orbit of a record store. In 2017, Record Store Day was a founding partner in the Making Vinyl conference, which brings together the companies and individuals responsible for the ongoing vinyl resurgence.
            In 2020, due to the global pandemic which affected record stores worldwide, Record Store Day morphed into three RSD Drops dates-- August 29, September 26 and October 24-- and split the official List of releases between them. The focus wasn't on parties, and shows but on celebrating the comfort, joy and fun that they bring their customers through what they sell. Even during a pandemic, record stores proved essential to their community.
          </Typography>
      </Paper>
      
    </Box>
    );
};

export default About;


