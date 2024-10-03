import React, { useState } from 'react'
import m1 from "../src/image/uke.jpg"
import m2 from "../src/image/kushi.jpg"
import m3 from "../src/image/jeans.jpg"
import m4 from "../src/image/heyram.jpg"
import m5 from "../src/image/alaipaayuthe.jpg"
import m6 from "../src/image/reetham.jpg"
import m7 from "../src/image/10.jpg"



const Data3 = [
    {
      id: 1,
      title:'Unnai Kodu Ennai Tharuven',
      imageUrl: m1,
      videoUrl:'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162887/u_f526oh.mp4',
      description: `Unnai Kodu Ennai Tharuven (transl.Give me yourself, and I'll give you myself) is a 2000 Indian Tamil-language war drama film produced by R. B. Choudary of Super Good Films and directed by Kavi Kalidas, in his only directorial credit. The film stars Ajith Kumar and Simran in the lead roles, while Nassar, Raghava Lawrence, Manivannan, and Kitty play supporting roles and Parthiban in a guest appearance. The music was composed by S. A. Rajkumar with cinematography by Agilan and editing by V. Jaishankar. The film released on 19 May 2000 and failed at the box office.

Plot
Surya has been brought up in the army training barracks in Wellington (Ooty) ever since his mother handed him over as a baby to the camp brigadier. She tells the officer the reason for her action, but the audience is not allowed to hear it at this point. Surya grows up to be a patriotic youth and the best soldier in his class. He is about to complete his training in three months and leave to the border. He falls in love with Indu, the daughter of a senior army officer, who is visiting Wellington Camp. Indu's parents accept her choice of husband, and the family leaves to Kashmir.`
    },
    {
      id: 2,
      title:'kushi',
      imageUrl: m2,
      videoUrl:  'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162887/u_f526oh.mp4',
      description:`Kushi (transl.Happiness) is a 2000 Indian Tamil-language romantic comedy film written and directed by S. J. Suryah and produced by A. M. Rathnam. The film stars Vijay and Jyothika in the lead roles, while Mumtaj, Vijayakumar, Vivek and Nizhalgal Ravi and others in the supporting roles. The film's cinematography was done by Jeeva, while music was composed by Deva.

Kushi released on 19 May 2000. The film's Telugu version, also titled Kushi (2001), was initially planned as a bilingual along with the Tamil version, but released a year later due to production delays.[2][3][4] The film was remade in Hindi as Khushi (2003), and in Kannada as Eno Onthara (2010).

Plot
The movie begins with the birth of the protagonists, Shiva and Jennifer "Jenny" aka Selvi, in Calcutta and Kuttralam in Tirunelveli district of Tamil Nadu respectively. During the course of their childhood, they encounter each other a couple a times, though both don't know each other. When Shiva turns 21, he decides to pursue his higher studies in Canada, much to the disappointment of his mother, who is worried about him and wants him to stay in Calcutta. But while on the way to the airport, he meets with an accident and fractures his leg, forcing him to give up his dreams of studying abroad. At the same time, Jenny wants to pursue her post-graduation, but this is opposed by her father Pandiyan, who wants her to get married. But when Jenny's marriage gets cancelled as the groom runs away on the night before the wedding to elope with his lover, Pandiyan agrees to Jenny pursuing higher studies, on the condition that she gets married once she completes her education.`
    },
    {
      id: 3,
      title:'jeans',
      imageUrl: m3,
      videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162608/jeans_m0yk1b.mp4',
      description:`Jeans is a 1998 Indian Tamil-language romantic comedy film directed by S. Shankar, and produced by Ashok Amritraj and Murali Manohar. The film stars Prashanth and Aishwarya Rai, while Lakshmi, Radhika Sarathkumar, Nassar, Senthil and Raju Sundaram play supporting roles. The background score and soundtrack were composed by A. R. Rahman, while Ashok Kumar and the duo B. Lenin and V. T. Vijayan handled the cinematography and editing, respectively.

Jeans had a wide release on 24 April 1998 and was the most expensive film to be made in Indian cinema at that time. The film won four Tamil Nadu State Film Awards, the Filmfare Award for Best Music Director – Tamil (Rahman) and the National Film Award for Best Special Effects. It was also India's official submission for the Academy Award for Best Foreign Language Film.

Plot
Nachiappan is a wealthy and successful Indian American restaurateur based in Los Angeles. He has two sons – Viswanathan "Visu" and Ramamoorthy "Ramu" – who are identical twins. They both are medical students and spend their evenings helping out their father alongside the restaurant's chief cook, Juno. One evening, when Visu & Ramu go to the airport to do their lunch supply, Visu sees an Indian Tamil family from Chennai – Madhumitha "Madhu", her younger brother Madhesh, and their grandmother Krishnaveni – having some problems with the immigration authorities. Visu pitches in to help and learns that they just flew in from India so that Krishnaveny can undergo a surgery to remove her brain tumour. After many confusions, the trio meets with Ramu also. The twins arrange for the three to reach their host.`
    },
    {
        id: 4,
        title:'heyram',
        imageUrl: m4,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725162446/heyram_iuau1z.mp4',
        description:`Hey Ram (transl. Oh! Ram) is a 2000 Indian epic historical drama film written, directed, and produced by Kamal Haasan, that stars him and Shah Rukh Khan (in his Tamil debut) in lead roles. It was simultaneously made in the Tamil and Hindi languages.

The film's soundtrack and score were composed by Ilaiyaraaja. It is an alternate history film that depicts India's Partition and the assassination of Mahatma Gandhi by Nathuram Godse. The Hindi version was distributed by Khan's Dreamz Unlimited.[3][4]

Hey Ram received positive reviews, but failed commercially at the box office. It was screened at the International Film Festival of India and selected by the Film Federation of India as its submission to the Oscars in the year 2000, but was not nominated. The film has garnered three National Film Awards. Internationally, the film was screened at the 25th Toronto International Film Festival and at the 2000 Locarno Festival.`
      },
      {
        id: 5,
        title:'Alai payuthey',
        imageUrl: m5,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725161960/ap_bnevxw.mp4',
        description: `Alai Payuthey, also spelt Alaipayuthey (/əlaɪpɑːjʊðeɪ/ transl. Waves are flowing), is a 2000 Indian Tamil-language romantic musical film co-written, co-produced and directed by Mani Ratnam, starring R. Madhavan and Shalini. The film explores the tensions of married life between two young people who elope and the maturing of love among urban Indians who are conflicted between tradition and modernity. The score and soundtrack were composed by A. R. Rahman.

The film's story is mostly recollected in flashbacks by Karthik (Madhavan), on how he and Shakthi (Shalini) fall in love against the backdrop of Chennai and its suburban trains, against the wishes of their parents. The film had a mostly positive reception by critics.

The film made its European premiere at the Berlin International Film Festival in 2001. It was shown at various film festivals nationally and internationally. It was dubbed and released in Telugu under the title Sakhi.[1] Alai Payuthey was later remade and released in Hindi in 2002, as Saathiya, directed by Shaad Ali.

Plot
Karthik Varadarajan is an independent and free-spirited software engineering graduate from a wealthy family who owns a startup along with his friends. At a friend's wedding, he meets Shakthi Selvaraj, a medical student from a middle-class family. The duo constantly bumps into each other on the local commuter trains they both use, and they eventually fall in love. Karthik pursues Shakthi aggressively and proposes marriage. Shakthi, however, is reluctant. Karthik manages to convince Shakthi and request his parents to formally ask Shakthi's parents for her hand in marriage. However, when the parents meet, they do not get along, and Shakthi calls off the relationship altogether and leaves for an extended medical camp in Kerala.`
      },
      
      {
        id: 6,        
        title:'rhythm',
        imageUrl: m6,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725161960/ap_bnevxw.mp4',
        description:`Rhythm is a 2000 Indian Tamil-language romantic drama film written and directed by Vasanth and produced by V. Natarajan. The film stars Arjun and Meena with Jyothika, Ramesh Aravind, Lakshmi, Nagesh, and Manivannan in important roles. The music was composed by A. R. Rahman, while cinematography was predominantly handled by P. S. Vinod, and Sreekar Prasad edited the film. The film was released on 15 September 2000, receiving positive reviews from critics.

Plot
Karthikeyan is a photographer-editor working for The Indian Express in Mumbai, and Chitra is a bank employee. Both reside in Navi Mumbai. Karthik meets Chitra while opening a bank account, and while returning home, he again meets her on the train. He offers his seat as she is standing, but she does not want to accept it. During a train strike, he invites her to travel in an auto rickshaw together to reduce expenses, but she declines. When Chitra hesitates the next day to travel in the same train with Karthik, he becomes exasperated and explains that he only talked to her because both are from the same locality and both are Tamilians, and he promises her that he will never talk to her again. After some days Chitra voluntarily talks to him, and Karthik sees that her handbag was snatched. In return, accompanies her to the closest police station to report it. Karthik invites Chitra to his home to meet his parents.`
      },
      {
        id: 6,
        title:'Pathu thala',
        
        imageUrl: m7,
        videoUrl: 'https://res.cloudinary.com/dnb5k6kpt/video/upload/v1725161960/ap_bnevxw.mp4',
        description: `Pathu Thala (transl. Ten-Headed) is a 2023 Indian Tamil-language neo-noir action thriller film directed by Obeli N. Krishna and produced by Studio Green, in the company of Pen Studios. The film stars Silambarasan in the lead role, alongside Gautham Karthik, Priya Bhavani Shankar, Gautham Vasudev Menon, Santhosh Prathap, Kalaiyarasan, Anu Sithara and Teejay Arunasalam. It is a remake of the 2017 Kannada-language film Mufti. The film follows AG Ravanan "AGR", a crime boss, who gets tracked down by Guna, an undercover cop as Sakthivel.

The Tamil remake of Mufti was announced in June 2019, with Narthan, the director of the original film, as the director. Principal photography faced postponement due to Silambarasan delaying the commencement. Which led to, the following year in October, Narthan opting out and subsequently being replaced with Krishna. Principal photography commenced in August 2021. It was shot sporadically in several legs and wrapped by late-November 2022. Filming locations included Chennai and Karnataka. The film has music composed by A. R. Rahman, cinematography handled by Farook J. Basha and editing by Praveen K. L.

Pathu Thala was released on 30 March 2023. It's received mixed to positive reviews from critics.[2] The film grossed ₹55 crore at the box office making it a commercial success.[1]`
      },
    
  ];
  export default Data3