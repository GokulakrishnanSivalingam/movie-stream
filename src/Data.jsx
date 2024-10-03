import React, { useState } from 'react'
import m1 from "../src/image/ayalan.jpg"
import m2 from "../src/image/desiel.jpg"
import m3 from "../src/image/japan.jpg"
import m4 from "../src/image/nadula.jpg"
import m5 from "../src/image/vivasai.jpg"
import m6 from "../src/image/vv.jpg"
import m7 from "../src/image/leo.jpg"





const Data = [
    {
      id: 1,
      title:'Ayalaan',
      imageUrl: m1,
      videoUrl:'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725161419/ayalaan_tqxprg.mp4',
      description: `Ayalaan (/əjəlɑːn/ transl. Alien) is a 2024 Indian Tamil-language science fiction action comedy film directed by R. Ravikumar and produced by KJR Studios. The film stars Sivakarthikeyan and Rakul Preet Singh in the lead roles, alongside Sharad Kelkar, Isha Koppikar, Karunakaran, Yogi Babu, David Broughton-Davies, Bhanupriya and Bala Saravanan, with Siddharth voicing the titular role. It follows Thamizh who teams up with Tattoo, an alien, to stop Aryan, a rogue scientist, from making a deadly Nova gas, which would endanger the Earth.

The film was announced by 24AM Studios in October 2016, but the studio backed out before KJR Studios took over, and principal photography commenced in June 2018. The film was predominantly shot in Chennai, and wrapped by early-January 2021 after delays due to financial issues, Sivakarthikeyan's other commitments and the COVID-19 pandemic, while additional photography took place in November 2022. The film has music composed by A. R. Rahman, cinematography by Nirav Shah and editing by Ruben. It has over 4500 visual effects shots, the most for an Indian film.

Ayalaan was released theatrically on 12 January 2024, during the week of Pongal, after having been delayed from Diwali (late 2023) due to unfinished post-production works. The film received positive reviews from critics, and has grossed over ₹96 crore (US$12 million),[2] emerging the third highest-grossing Tamil film of 2024. Shortly after the film's success, a sequel was announced`
    },
    {
      id: 2,
      title:'Leo',
      imageUrl: m7,
      videoUrl:'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162804/leo_nubj1z.mp4',
      description: `Leo (also marketed as Leo: Bloody Sweet) is a 2023 Indian Tamil-language action thriller film[7] directed by Lokesh Kanagaraj and produced by Seven Screen Studio. The film stars Vijay in the titular role, alongside Sanjay Dutt, Arjun Sarja, Trisha, Gautham Vasudev Menon, Mysskin, Madonna Sebastian, George Maryan, Mansoor Ali Khan, Priya Anand and Mathew Thomas. It is the third instalment in the Lokesh Cinematic Universe and is partially inspired by A History of Violence. The film follows Parthi, a café owner and animal rescuer in Theog, who is pursued by gangsters Antony and Harold Das who suspect him to be Antony's estranged son, Leo.

The film was officially announced in January 2023 under the tentative title Thalapathy 67, as it is Vijay's 67th film as a lead actor, and the official title was announced a few days later. Principal photography commenced the same month in Chennai along with a sporadic schedule in Kashmir, which was again followed by another schedule held at the former location, and wrapped by mid-July. The film has music composed by Anirudh Ravichander, cinematography handled by Manoj Paramahamsa and editing by Philomin Raj.`
    },
    {
      id: 3,
      title:'japan',
      imageUrl: m3,
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162605/japan_kybic6.mp4',
      description: `japan is a 2023 Indian Tamil-language heist action comedy film written and directed by Raju Murugan. It is produced by S. R. Prakash Babu and S. R. Prabhu under Dream Warrior Pictures. The film stars Karthi and Anu Emmanuel, alongside Sunil, Vijay Milton and Jithan Ramesh.

The film was officially announced in August 2022. Principal photography began in November, and wrapped by late-June 2023. The official title Japan was revealed in the same month. The film has music composed G. V. Prakash Kumar, cinematography handled by Ravi Varman and editing by Philomin Raj.

Japan was released on 10 November 2023, the week of Diwali. Despite high expectations, the film was Heavily panned by critics and audiences, although Karthi's performance was praised, but criticised the screenplay, story, cast performance & some improper Foul language being not censored properly and the film became a box-office-disaster.

Plot`
    },
    {
        id: 4,
        title:'noodles',
        imageUrl: m4,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162789/noodles_sdfmpp.mp4',
        description: `Noodles is a 2023 Indian Tamil-language thriller film written and directed by Madhankumar Dakshinamoorthy and produced by Pragna Arun Prakesh. The film features Harish Uthaman, Sheela Rajkumar, Madhankumar Dakshinamoorthy, Thirunavukkarasu, Aazhiya Senthilkumar, and Vasant Marimuthu.[1]`
      },
      {
        id: 5,
        title:'kadaisi vivasyi',
        imageUrl: m5,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162808/kv_suswil.mp4',
        description:`Kadaisi Vivasayi (transl. The last farmer) is a 2022 Indian Tamil-language drama film by M. Manikandan. It stars an 85-year-old farmer named Nallandi and features Vijay Sethupathi and Yogi Babu in supporting roles.[1] Besides writing and directing, Manikandan produced the film and helmed the cinematography as well.[2] Kadaisi Vivasayi released on 11 February 2022 [3] and received widespread critical acclaim but ended up as a box office failure.[4] It won the Best Feature Film In Tamil, Special Mention for actor Nallandi at the 69th National Film Awards[5]

Plot
Mayandi is an eighty-year-old farmer living a frugal lifestyle in a village near Usilampatti. He talks very little and displays very little emotion. As there are no farmers in the village, the village tasks him with providing the symbolic first grain for the village temple's annual ceremony. The village's other farmers have sold their lands to financiers for future developmental projects. Mayandi plants a new batch of paddy in his field, and one day he finds a peacock and two peahens dead in his cropland. He considers them vehicles of his favourite god, Murugan and buries them in his field. A fellow villager sees him burying the birds. Soon, the police arrest Mayandi for killing a peacock, India's national bird.`
      },
      
      {
        id: 6,
        title:'kaalakoothu',
        imageUrl: m6,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162768/kk_kywvcd.mp4',
        description: `Kaalakkoothu (transl. Antics of time) is a 2018 Tamil language romantic drama film written and directed by M. Nagarajan. The film stars Prasanna, Kalaiyarasan, Dhansika, and Srushti Dange in the leading roles. Featuring music composed by Justin Prabhakaran, the film began production in April 2015[1] and was released on 25 May 2018.[2]

Plot
The film opens with a new boy named Easwaran joining Hari's class. Easwaran is instantly disliked because of his withdrawn nature. Hari picks a fight with Easwaran; during the fight, Easwaran breaks Hari's nose, and Hari brings his parents to school. Hari's mother, however, on learning that Easwaran is an orphan, tells him that she can consider him as his mother. However, in a few days, she dies. At her funeral, Easwaran holds Hari's hand and consoles him.`
      },
      {
        id: 7,
        title:'Desiel',
        imageUrl: m2,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162182/diesel_vamwyk.mp4',
        description: 'movie not yet release'
      },
    
  ];
  export default Data