let Text = [
     `A journey by boat is a peaceful and enjoyable experience It gives us a chance to enjoy the beauty of nature and the calmness of the river or sea It is very different from other kinds of travel and creates many special memories Last year during my school holidays I went to visit my grandparents in a village near a river One morning my uncle planned a boat trip for us We woke up early and walked to the riverbank The sun was rising and the weather was cool and fresh We got into a wooden boat with a small roof to protect us from the sun The boatman slowly pushed the boat forward with a long stick The river water was calm and clear Birds were flying above and fish were jumping in the water I saw trees green fields and small huts on both sides of the river As the boat moved gently we felt very relaxed We sang songs and talked with each other My uncle told us stories about his own boat journeys when he was young We ate some snacks and took a rest while enjoying the view After a few hours we reached a small island with trees and grass We walked around and took a short break before starting the return journey The way back was just as beautiful The sky was turning orange as the sun was setting and everything looked golden and peaceful It was a simple journey but full of joy and wonder I will always remember the quiet sound of the water the soft wind on my face and the lovely time spent with my family`,

     `Bike riding is a fun and healthy activity It is one of the best ways to enjoy the outdoors and stay active People of all ages can learn to ride a bike and use it for travel play or exercise I learned to ride a bike when I was a young child At first it was difficult and I fell many times But I kept trying and soon I was able to ride without help The feeling of moving forward with the wind on my face was amazing Bike riding has many benefits It helps keep our body strong and our mind fresh It is also good for the environment because bikes do not use fuel and do not cause pollution Many people use bikes to go to school or work and it saves money too Riding a bike with friends is always enjoyable We race with each other ride through quiet roads and explore new places together It also helps build teamwork and friendship We should always be careful while riding a bike Wearing a helmet and following traffic rules is very important We should also make sure our bike is in good condition before we ride`,

     `A laptop is a useful and powerful tool in our daily life It is a small computer that we can carry from one place to another People use laptops for many different purposes such as studying working watching videos and playing games Students use laptops to attend online classes and complete assignments They can search for information read digital books and take notes during lessons It helps them learn faster and stay organized Teachers also use laptops to prepare lessons show presentations and give online exams They can connect with students from anywhere and share learning materials easily In offices laptops are used to write reports send emails and join meetings People can work from home or while traveling because laptops are portable and easy to use Laptops are also good for entertainment We can watch movies listen to music or talk with friends and family through video calls Many people also use laptops to edit photos and create art or design However we must be careful while using laptops Too much screen time can hurt our eyes and body posture It is important to take breaks and sit in a proper position while using a laptop`,

     `The internet is one of the greatest inventions of modern times It has changed the way people live work and communicate all over the world Through the internet we can find any information within seconds Students use the internet to study learn new things and complete their homework Teachers use it to prepare lessons and teach online classes People use the internet to send emails chat with friends and make video calls Social media helps us stay connected with others no matter where they live The internet is also used for shopping banking and booking tickets It saves time and makes life easier Many people work from home using the internet and some even run their own online businesses The internet is a big source of entertainment as well We can watch movies listen to music play games and read books online But we should also be careful when using the internet Not all information is true and some websites can be harmful We must use strong passwords and never share personal details with strangers`,

     `School life is one of the most important parts of a persons journey It is the time when we learn grow and make memories that stay with us forever From the first day at school we meet new friends learn to read and write and slowly begin to understand the world around us Teachers help us learn new things and guide us to become better people School is not only about books and exams It is also about playing games taking part in cultural events going on trips and enjoying time with classmates These moments bring joy and help us learn teamwork friendship and discipline Every day in school teaches us something new We learn how to share how to respect others and how to solve problems We also learn the value of time honesty and hard work Sometimes school life can be challenging There may be pressure to do well in studies or to manage many activities But these challenges help us become strong and responsible`,

     `Discipline is an important quality that helps us lead a successful and happy life It means following rules being responsible and controlling our behavior When we have discipline we do our work on time We study regularly complete our tasks and respect others Discipline helps us stay focused and achieve our goals In school discipline is very important Students who follow rules and listen to teachers learn better and create a good environment for everyone It also teaches us to be patient and polite Discipline is not only about rules but also about self control We learn to manage our emotions and make good decisions Even when things are difficult discipline helps us keep trying and never give up At home discipline helps us share chores respect family members and live peacefully It is the foundation of good habits and strong character`,

     `A computer student is someone who learns about computers and technology They study how computers work how to write programs and how to solve problems using technology In todays world computers are used everywhere from schools and offices to hospitals and homes Learning computer skills is very important for students because it helps them prepare for the future Computer students learn many things such as programming using software designing websites and understanding how the internet works They also learn about computer hardware and how to keep computers safe from viruses Being a computer student requires practice and patience Writing code and solving problems can be difficult at first but with time students get better and more confident Many schools and colleges offer special courses for computer students They can also participate in competitions and projects that help improve their skills and creativity`,

     `Watching a movie is a popular way to relax and enjoy free time Movies tell stories that entertain us and take us to different places and times People watch movies at home on television or computers and in cinemas with friends and family The experience of watching a movie on a big screen with sound is very exciting Movies come in many types such as action comedy drama and adventure Everyone has their favorite kind of movie Watching movies can make us laugh cry or think deeply Before watching a movie we often choose based on reviews or recommendations from friends Sometimes movies teach us important lessons about life and human feelings Watching movies together can bring people closer We share our opinions talk about characters and enjoy the moments of fun and excitement`,

     `Hostel life is a unique experience for many students It teaches us independence and helps us make new friends living away from home in a hostel can be both exciting and challenging In a hostel students share rooms and learn to live together with respect and cooperation They take care of their daily needs and manage their time for study and rest Hostel life teaches discipline because students follow rules set by the authorities They learn to be responsible for their actions and develop good habits Living in a hostel also helps students become more confident and social They participate in activities and events which build teamwork and leadership skills Although sometimes students may feel homesick the friendships and experiences in the hostel create lasting memories It is a place where students grow not only in education but also as individuals`,

     `Becoming a computer engineer is a great career choice for those who love technology and solving problems Computer engineers design build and maintain computer systems and software that help people in many ways To become a computer engineer a student must study subjects like mathematics physics and computer science It is important to work hard and understand the basics well Many colleges offer special courses in computer engineering Computer engineers create software applications build networks and work on hardware development They play a key role in developing new technologies such as artificial intelligence and robotics This career requires creativity patience and continuous learning Technology changes fast so computer engineers must keep updating their skills through training and practice A computer engineer can work in many industries such as software companies hardware firms telecommunications and research organizations The job offers good salary and opportunities for growth`,

     `A poor family is one that does not have enough money to meet basic needs such as food clothing shelter and education Life is very difficult for poor families because they face many challenges every day Children in poor families often cannot go to school or get proper healthcare They may have to work at a young age to help their parents earn money This affects their future and chances of a better life Poor families live in small houses or sometimes without a proper home They struggle to get clean water and enough food It is hard to stay healthy under such conditions Society should help poor families by providing support such as schools hospitals and jobs Everyone has a right to live with dignity and opportunities to improve their life Despite the difficulties many poor families work hard and remain hopeful They teach their children values like honesty kindness and patience which are very important in life`,
];

const input = document.getElementById("input");
const para = document.getElementById("para");

let index = Math.floor(Math.random() * Text.length);
let mainText;

for (let i = 0; i < Text.length; i++) {
     mainText = Text[index];
}

const renderText = (userInput) => {
     const words = mainText.toLowerCase().split(" ");
     const fullText = words.join(" ").split(""); // compareable text
     let typedText = userInput.trim().split(" ");
     const userChars = typedText.join(" ").split(""); // compareable text

     let display = "";
     for (let i = 0; i < mainText.length; i++) {
          if (fullText[i]) {
               if (fullText[i] === userChars[i]) {
                    display += `<span style="color: white">${fullText[i]}</span>`;
               } else if (userChars[i]) {
                    display += `<span style="color: red; text-decoration: underline;">${fullText[i]}</span>`;
               } else {
                    display += `<span style="color: gray">${fullText[i]}</span>`;
               }
          } else {
               display += `<span style="color: gray">${fullText[i]}</span>`;
          }
     }
     para.innerHTML = display;
};

input.addEventListener("input", () => {
     renderText(input.value);
});

renderText("");
