import React, { useState } from 'react'
import m1 from "../src/image/endg.jpg"
import m2 from "../src/image/dp.jpg"
import m3 from "../src/image/i1.jpg"
import m4 from "../src/image/hulk.jpg"
import m5 from "../src/image/civilwar.jpg"
import m6 from "../src/image/t4.jpg"



const Data2 = [
    {
      id: 1,
      title:'Avengers endgame',
      imageUrl: m1,
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162193/endgame_k33f2u.mp4',
      description: `Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast which includes Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse Thanos's actions in Infinity War which erased half of all life in the universe.

The film was announced in October 2014 as Avengers: Infinity War – Part 2, but Marvel Studios later removed this title. The Russo brothers joined as directors in April 2015, with Markus and McFeely signing on to write the script a month later. It is a conclusion to the story of the MCU up to that point, ending the story arcs of several main characters. The film's plot revisits several moments from earlier films, bringing back actors and settings from throughout the franchise. Filming began in August 2017 at Pinewood Atlanta Studios in Fayette County, Georgia, shooting back-to-back with Infinity War, and ended in January 2018. Additional filming took place in the Metro and downtown Atlanta areas, New York State, Scotland, and England. The official title was announced in December 2018. With an estimated budget of $356–400 million, the film is one of the most expensive films ever produced.`
    },
    {
      id: 2,
      title:'Deadpool3',
      imageUrl: m2,
      videoUrl:  'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162023/d3_hbfejm.mp4',
      description: 'Deadpool & Wolverine is a 2024 American superhero film based on Marvel Comics featuring the characters Deadpool and Wolverine. Produced by Marvel Studios, Maximum Effort, and 21 Laps Entertainment, and distributed by Walt Disney Studios Motion Pictures, it is the 34th film in the Marvel Cinematic Universe (MCU) and the sequel to Deadpool (2016) and Deadpool 2 (2018). The film was directed by Shawn Levy from a screenplay he wrote with Ryan Reynolds, Rhett Reese, Paul Wernick, and Zeb Wells. Reynolds and Hugh Jackman respectively star as Wade Wilson / Deadpool and Logan / Wolverine, alongside Emma Corrin, Morena Baccarin, Rob Delaney, Leslie Uggams, Aaron Stanford, and Matthew Macfadyen. In the film, Deadpool learns that the Time Variance Authority is set to destroy his universe and works with a reluctant Wolverine from another universe to stop them.'
    },
    {
      id: 3,
      title:'iron man 1',
      imageUrl: m3,
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162692/iron_fp5p0r.mp4',
      description: `Iron Man is a superhero appearing in American comic books published by Marvel Comics. Co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby, the character first appeared in Tales of Suspense #39 in 1962 (cover dated March 1963) and received his own title with Iron Man #1 in 1968. Shortly after his creation, Iron Man became a founding member of the superhero team, the Avengers, alongside Thor, Ant-Man, the Wasp, and the Hulk. Iron Man stories, individually and with the Avengers, have been published consistently since the character's creation.

Iron Man is the superhero persona of Anthony Edward "Tony" Stark, a businessman and engineer who runs the weapons manufacturing company Stark Industries. When Stark was captured in a war zone and sustained a severe heart wound, he built his Iron Man armor and escaped his captors. Iron Man's suits of armor grant him superhuman strength, flight, energy projection, and other abilities. The character was created in response to the Vietnam War as Lee's attempt to create a likeable pro-war character. Since his creation, Iron Man has been used to explore political themes, with early Iron Man stories being set in the Cold War. The character's role as a weapons manufacturer proved controversial, and Marvel moved away from geopolitics by the 1970s. Instead, the stories began exploring themes such as civil unrest, technological advancement, corporate espionage, alcoholism, and governmental authority.`


    },
    {
        id: 4,
        title:'Hulk',
        imageUrl: m4,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162746/hulk_qlerpa.mp4',
        description: 'The Incredible Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character, who has dissociative identity disorder (DID), is primarily represented by the alter ego Hulk, a green-skinned, hulking, and muscular humanoid possessing a limitless degree of physical strength, and the alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, both of whom typically resent each other.'
      },
      {
        id: 5,
        title:'Caption America-civilwar',
        imageUrl: m5,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725161489/civil_c0ievx.mp4',
        description: 'Captain America: Civil War is a 2016 American superhero film based on the Marvel Comics character Captain America, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Captain America: The First Avenger (2011) and Captain America: The Winter Soldier (2014), and the 13th film in the Marvel Cinematic Universe (MCU). The film was directed by Anthony and Joe Russo from a screenplay by the writing team of Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside an ensemble cast including Robert Downey Jr., Scarlett Johansson, Sebastian Stan, Anthony Mackie, Don Cheadle, Jeremy Renner, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Paul Rudd, Emily VanCamp, Marisa Tomei, Tom Holland, Frank Grillo, Martin Freeman, William Hurt, and Daniel Brühl. In Captain America: Civil War, disagreement over international oversight of the Avengers fractures the team into two opposing factions—one led by Steve Rogers and the other by Tony Stark (Downey).'
      },
      
      {
        id: 6,
        title:'Thor love and thunder',
        imageUrl: m6,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162875/thor_zbnwd4.mp4',
        description: 'Thor: Love and Thunder is a 2022 American superhero film based on Marvel Comics featuring the character Thor. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Thor: Ragnarok (2017) and the 29th film in the Marvel Cinematic Universe (MCU). The film was directed by Taika Waititi, who co-wrote the screenplay with Jennifer Kaytin Robinson, and stars Chris Hemsworth as Thor alongside Christian Bale, Tessa Thompson, Jaimie Alexander, Waititi, Russell Crowe, and Natalie Portman. In the film, Thor tries to find inner peace, but must return to action and recruit Valkyrie (Thompson), Korg (Waititi), and Jane Foster (Portman)—who is now the Mighty Thor—to stop Gorr the God Butcher (Bale) from eliminating all gods.'
      },
    
  ];
  export default Data2