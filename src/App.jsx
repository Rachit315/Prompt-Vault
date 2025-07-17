import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './navbar'
import './App.css'
import Hero from './hero'
import Card from './components/card'
import Footer from './footer'
function Home() { return }
function Contacts() { return }
function About() { return  }


function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      <Hero/>
      <div className="cards-section">
        <div className="Cards">
        <Card prompt="A highly stylized portrait of same person in image with sharp features, flawless fair skin, wearing a black t-shirt, black sunglasses and standing against a bold red gradient background, confidently.

The lighting is dramatic and cinematic, emphasizing his tacial structure and giving a luxury fashion magazine vibe.

Ultra-realistic, high-detail, editorial photography style. 4K resolution, symmetrical composition, minimal background elements. 4:3 ratio." imgsrc="https://videos.openai.com/vg-assets/assets%2Ftask_01jy3y35bqev6a67zxcbvpbaqz%2F1750331476_img_3.webp?st=2025-07-16T10%3A35%3A59Z&se=2025-07-22T11%3A35%3A59Z&sks=b&skt=2025-07-16T10%3A35%3A59Z&ske=2025-07-22T11%3A35%3A59Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=SYPPFS7lQsKRMwELS4MGjp2PeWawugVZ2TWUHn%2Begcw%3D&az=oaivgprodscus"/>
<Card prompt="Create a modern magazine cover style design featuring an ultra detailed and vibrant portrait of a young man facing forward biting his lip slightly wearing a black leather jacket with a REBORN patch gold earrings and disheveled textured hair the background is white with bold red paint streaks and layered sticker graphics the magazine title UNLEASH is placed at the top center in bold stencil font on the left side include the cover line THE FACE OF NEXT GEN and on the right side add STYLE POWER MIND at the bottom left place a barcode and the hashtag REBELMINDSET on the bottom right in small text include Vol 8 RAW REAL RELENTLESS the overall look should be hyper photorealistic in 8K resolution with a focus on skin texture outfit creases and a streetwear editorial finish use a subtle vignette to add depth and visual impact" imgsrc="https://sdmntprcentralus.oaiusercontent.com/files/00000000-d254-61f5-912a-974889b43fb5/raw?se=2025-07-16T15%3A09%3A06Z&sp=r&sv=2024-08-04&sr=b&scid=0c92c23f-19e4-5785-a820-63090ac19f20&skoid=60f2aa1f-3685-43ee-be37-d8c8d08d5a64&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-15T21%3A12%3A42Z&ske=2025-07-16T21%3A12%3A42Z&sks=b&skv=2024-08-04&sig=kvxJYMKRfKmeMQOouWuEbbnxG8olgJrZhkdM/TDqPWk%3D"/>


<Card prompt="ChatGPT said:
Create an ultra realistic night time portrait of a young man standing near the Arc de Triomphe at Place Charles de Gaulle in Paris the Arc de Triomphe is fully visible and brightly illuminated in the center of the frame with deep shadows and warm street lights softly glowing in the background the classic Place Charles de Gaulle street sign is clearly visible on the ornate lamppost to the right side of the subject maintain warm ambient nighttime lighting with subtle yellow orange glows from the streetlights capture soft shadows and realistic noise or grain apply warm highlights deep shadows and slightly muted tones for a cinematic moody feel the subject is facing left head tilted upward at a forty five degree angle with eyes closed and a serene introspective expression the camera angle is slightly low and tilted upward capturing a chest up view in a three quarter profile from the left side the pose is relaxed with hands in jacket pockets shoulders naturally slouched conveying a quiet reflective mood dress the subject in a black leather jacket over a red textured sweater with the lower portion of blue jeans slightly visible keep outfit textures and folds true to real fabric under the lighting conditions replace the original subject's face with the face from the uploaded selfie without altering features expression or proportions make the skin fair smooth and flawless while keeping all natural facial details intact style the hair to be medium length dark and slightly wavy falling naturally over the forehead and sides" imgsrc="https://sdmntprcentralus.oaiusercontent.com/files/00000000-d254-61f5-912a-974889b43fb5/raw?se=2025-07-17T05%3A41%3A11Z&sp=r&sv=2024-08-04&sr=b&scid=cdbb8986-8067-539f-9996-fc41930e53cf&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-17T04%3A21%3A08Z&ske=2025-07-18T04%3A21%3A08Z&sks=b&skv=2024-08-04&sig=yj6Lh4w/QAfWdxXWwiCXC/iYdRvPH8FF8Vpt3LIDLaA%3D"/>
      </div>
      <br />
      <br />
      <br />
        <div className="Cards">
        <Card prompt="Take an extremely ordinary and unremarkable iPhone selfie, with no clear subject or sense of composition—just a quick accidental snapshot. The photo has slight motion blur and uneven lighting from streetlights or indoor lamps, causing mild overexposure in some areas. The angle is awkward and the framing is messy, giving the picture a deliberately mediocre feel, as if it was taken absentmindedly while pulling the phone from a pocket. The main character stands next to Cristiano Ronaldo, both caught in a casual, imperfect moment. The background shows a lively street at night, with neon lights, traffic, and blurry figures passing by. The overall look is intentionally plain and random, capturing the authentic vibe of a poorly composed, spontaneous iPhone selfie." imgsrc="https://videos.openai.com/vg-assets/assets%2Ftask_01jzwg5jqkebrv5mqdzt25bmm9%2F1752229512_img_0.webp?st=2025-07-16T12%3A25%3A54Z&se=2025-07-22T13%3A25%3A54Z&sks=b&skt=2025-07-16T12%3A25%3A54Z&ske=2025-07-22T13%3A25%3A54Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=6tygCfOiHsS6JPx3nDR%2BENtDMkHzjWyfqcvD2ATJ8TE%3D&az=oaivgprodscus"/>
<Card prompt="Create a hyper detailed graphic design featuring a striking portrait of a young woman with the same face as the uploaded image exuding a confident and commanding presence her hair is voluminous and styled with texture and movement flowing naturally to enhance visual depth the portrait is rendered in a high contrast black and white style standing out boldly against a minimalist smooth textured grey background her expression is calm focused and determined with one eye partially obscured by a bold red rectangular overlay adding a modern artistic edge vertically along the left side of the image the words PAUL SOMENDRA are repeated in large bold black letters with a transparent layering effect to create depth and a sense of motion embedded within the text are iconic design elements a prominent red Nike logo near the top a stylized red S lower down and a vertical red line slashing through the text to add visual tension on the right a sharp red geometric frame encloses the obscured eye drawing attention to the contrast of form and color her attire is a black leather jacket with an open collar suggesting power and refinement blending street style with elegance in the bottom right corner the phrase WORK SMART NOT HARD is displayed in bold red capital letters with the word SMART in a smaller flowing cursive script just below and signed off with GRAPHICS in a matching style like a signature or brand mark in the bottom left the hashtag PAUL is written in red tying into the identity theme the overall design is photorealistic with shallow depth of field focusing sharply on her face and detailed textures including hair jacket and facial features captured in ultra high resolution the style is 4 by 5 aspect ratio 8K ultra realistic shot on Hasselblad X2D 100C with dramatic soft lighting streetwear and graphic design aesthetic and high energy visuals with vivid red accents against the monochrome background" imgsrc="https://videos.openai.com/vg-assets/assets%2Ftask_01jy9gy5nnerrvwbmy10m7acsf%2F1750519043_img_3.webp?st=2025-07-16T12%3A25%3A54Z&se=2025-07-22T13%3A25%3A54Z&sks=b&skt=2025-07-16T12%3A25%3A54Z&ske=2025-07-22T13%3A25%3A54Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=2fbqU5yRSg0gClJRA0TL2DnlSqNDiUor2sQ652YyCZg%3D&az=oaivgprodscus"/>
<Card prompt="Create a high-end black and white portrait using my selfie. The face must remain exactly as in on my original selfie no editing, no retouching, no smoothing. I'm wearing the business suits.
Preserve every facial detail and texture for a raw, authentic look. The lighting should be dramatic and studio-quality, using strong contrast and shadows to sculpt the features.
Use a clean, blurred studio-style background with soft gradients or subtle texture to enhance focus on the subject.
Frame the portrait vertically (9:16 format), centered composition, with ultra-realistic skin texture and depth. No digital makeup or alterations. The final result should look timeless, editorial, and emotionally powerful - suitable for a gallery or fashion magazine." imgsrc="https://videos.openai.com/vg-assets/assets%2Ftask_01jy484kqzes0s19rt12ej467a%2F1750342032_img_1.webp?st=2025-07-16T12%3A25%3A59Z&se=2025-07-22T13%3A25%3A59Z&sks=b&skt=2025-07-16T12%3A25%3A59Z&ske=2025-07-22T13%3A25%3A59Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=6Qoy7UAkhSpnjM1Ade%2BPJuBF1qVtEW1bK4iOClRmmb8%3D&az=oaivgprodscus"/>
      </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer  />
    </div>
  )
}

export default App
