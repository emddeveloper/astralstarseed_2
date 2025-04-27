import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonialData = {
    data: [
      {
        text: "Meeting Sanjukta felt like fate, arriving at a time when I was battling personal, career, and financial struggles that had begun to weigh heavily on my family life. By chance, we crossed paths at a friend’s gathering during her visit to the UK, and from that moment, my life began to transform. Our first Akashic Records and tarot reading session revealed insights that felt both magical and deeply grounding. Sanjukta's extraordinary ability to connect with my energy and guide me through the chaos I was experiencing helped me take steps I had never imagined. Her wisdom and intuitive gifts not only shifted my perspective but also gave me the clarity and courage to make choices that changed the course of my life.",
        user: "Rohit Sharma",
        address: "UK"
      },
      {
        text: "I have been consulting Sanjukta Ma’am for a long time and truly appreciate her precision, honesty, and deep commitment to her clients. She provides accurate guidance and genuinely cares about the well-being of those she helps. Her Reiki healing brought immense relief to my mother, easing both her psychological and physical pain. Within just a few days, she became a much happier and more peaceful version of herself. Personally, I gained the strength to take on new challenges and the confidence to face my fears. Today, I feel more empowered and at peace, all thanks to Sanjukta Ma’am. It’s rare to find such gifted healers who are not only highly skilled but also genuinely dedicated to helping others. I am truly grateful for her guidance and support. Her expertise and compassion have made a profound difference in my life and my mother’s well-being. Sanjukta Ma’am’s dedication and healing abilities are truly remarkable.",
        user: "Priya Verma",
        address: "Delhi, India"
      },
      {
        text: "Sanjukta has a phenomenal gift and this coupled with her caring personality and sense of humour makes readings both real and meaningful. She gets it so right and can often advise what actions to take by laying cards on top for more specific questions. Last week, Sanjukta was able to add on an extra service with her pendulum and fine tune on a reading. I have seen Sanjukta for personal readings but also in corporate situations, she really can work the crowd with her quick wit and her guides always seem to be there helping to pass on message to the guest.",
        user: "Anil Kapoor",
        address: "Corporate Event"
      },
      {
        text: "Sanjukta is truly one of a kind. Her grace, empathy, and profound expertise make her a remarkable healer and mentor. She guided me to rediscover an inner calling for spirituality, which I had unknowingly ignored for so long. With her support, I was able to navigate the challenges I faced and find peace, balance, and purpose. Her sessions go beyond just offering answers, they provide a deep sense of healing and direction. If you feel lost or overwhelmed, I cannot recommend Sanjukta enough. She has a unique ability to guide you back to yourself and toward a brighter path. My only regret is not finding her sooner, but I am endlessly grateful for her presence in my life and the transformation she has brought.",
        user: "Sneha Iyer",
        address: "Bangalore, India"
      },
      {
        text: "Sanjukta provided my tarot card reading with 100% accuracy. Her gentle but practical approach addressed the very issues that were being questioned in my life. I was able to achieve better clarity of my circumstances through her thoughtful explanation as well as appreciate the necessary position I am in at this time in my life. I acknowledge that Sanjukta has divine abilities and I am appreciative for having experienced her intuitive gifts.",
        user: "Rajesh Gupta",
        address: "Hyderabad, India"
      },
      {
        text: "I had the best experience having read from her. She is very intuitive and spot on about the traits of a person. She was very kind and patient with my reading and spoke to me as a friend. I will keep updating this platform as and when the time comes but I have a lot of faith in what she has said and am positive of all of it coming true.",
        user: "Maitrayee Jha",
        address: "Mumbai, India"
      },
      {
        text: "Amazing! Very...Very...Intuitive. Sanjukta is very precise about what is happening and her predictions are always on target. She's also great to guide you and offers great advice and wisdom and insight in her readings. She definitely made me feel much better... Took the words right out of my mouth. She's well worth it! I could never really believe tarot could be so accurate and know my deepest held feelings or what I was really thinking or going through... Amazing and mind-blowing is all I can say! Truly inspired.",
        user: "Aarti Mehta",
        address: "Dubai, UAE"
      }
    ]
  };
}
