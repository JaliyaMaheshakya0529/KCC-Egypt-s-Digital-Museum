import React, { useState } from 'react';
import './Origin.css';

function Origin() {
  // State to manage the active popup detail visibility
  const [activeItem, setActiveItem] = useState(null);

  // FIXED: All imgSrc paths updated to point to the absolute path in public folder
  const itemData = {
    item01: {
      title: "Bird Deity",
      description: "The artifact shown in is a famous Predynastic Egyptian terracotta figurine known as the Bird-Headed Woman or Bird Deity, dating back to the Naqada period (circa 4000–3100 BCE). Crafted from Nile silt clay, the figure is characterized by its stylized, abstract features, including a beak like head, prominent breasts, a narrow waist, and a tapered lower body. Her exaggerated, upraised arms curve inward to mimic a bird's wings or the horns of a cow both of which are ancient symbols deeply tied to fertility, rebirth, and celestial deities like Hathor. Figurines like this one were typically placed in burials, suggesting they served a ritualistic or protective purpose to aid the deceased in the afterlife.",
      imgSrc: '/Items/Item1.jpg'
    },
    
    item02: {
      title: "Narmer Palette",
      description: "The artifact is the Narmer Palette (c. 3100 BCE), which celebrates the unification of Upper and Lower Egypt under King Narmer. The left side shows Narmer wearing the White Crown of Upper Egypt while striking a captive, while the right side shows him in the Red Crown of Lower Egypt inspecting defeated enemies. The intertwined necks of the mythical serpopards in the center symbolize the newly unified kingdom.",
      imgSrc: '/Items/Item2.jpg'
    },

    item03: {
      title: "Scorpion Macehead",
      description: "The artifact is the Scorpion Macehead (c. 3100 BCE), a ritual limestone weapon head from the Predynastic Naqada III period. It depicts a prominent ruler, known as King Scorpion, wearing the White Crown of Upper Egypt and holding a hoe during a ceremonial agricultural or irrigation ritual. The carvings emphasize the king's divine role in ensuring the land's fertility and maintaining cosmic order just before the formal unification of Egypt.",
      imgSrc: '/Items/Item3.jpg' 
    },
    item04: {
      title: "Nabta Playa calendar circle",
      description: "The artifact shown in the Nabta Playa calendar circle (c. 5000–4800 BCE), widely regarded as one of the world's oldest known astronomical observatories. Originally erected by Neolithic nomadic pastoralists in the Nubian Desert southwest of Aswan, the standing megaliths were arranged to track the summer solstice, signaling the arrival of critical seasonal monsoon rains. To safeguard the prehistoric site from modern vandalism, the original stones were carefully excavated and reconstructed in the outdoor gardens of the Nubian Museum in Aswan, Egypt",
      imgSrc: '/Items/Item4.jpg'
    }
  };

  const openPopup = (e, itemKey) => {
    e.preventDefault(); // Safeguards against default action or unexpected routing
    setActiveItem(itemData[itemKey]);
  };

  const closePopup = () => {
    setActiveItem(null);
  };

  return (
    <div className="Origin-page">
      <div className="Origin-content">
        
        <div className='items'>
          <a href='/' onClick={(e) => openPopup(e, 'item01')}>
            <img className='item01' src='/Items/icons/item1.png' alt='Item 01' />
          </a>

          <a href='/' onClick={(e) => openPopup(e, 'item02')}>
            <img className='item02' src='/Items/icons/Item2.png' alt='Item 02' />
          </a>

          <a href='/' onClick={(e) => openPopup(e, 'item03')}>
            <img className='item03' src='/Items/icons/Item3.png' alt='Item 03' />
          </a>

          <a href='/' onClick={(e) => openPopup(e, 'item04')}>
            <img className='item04' src='/Items/icons/item4.png' alt='Item 04' />
          </a>
        </div>

        <div className="Before-box">
          <div className="board-content">
            <h1 className="board-title">Pre-Civilization & Environment</h1>
            <p className="board-description">This gallery covers the natural world before society formed. It features Before Egypt and The Nile - Gift of Life, letting visitors use a slider to turn the Green Sahara into a desert, and a lever to flood the Nile to show how geography forced early humans to settle and farm.</p>
          </div>
        </div>

        <div className="Early-box">
          <div className="board-content">
            <h1 className="board-title">Early Society & Communities</h1>
            <p className="board-description">This section focuses entirely on First Settlements to show how humans transitioned into permanent communities. Visitors can click inside interactive mud-brick homes to see how early families managed grain storage, primitive farming tools, and domesticated animals.</p>
          </div>
        </div>

        <div className="Geopolitics-box">
          <div className="board-content">
            <h1 className="board-title">Geopolitics & Power Split</h1>
            <p className="board-description">This gallery highlights the political division of the Nile valley through the Two Kingdoms exhibit. Visitors use an interactive map to explore the distinct cultures, rulers, and rival crowns of Upper and Lower Egypt before they became a single country.</p>
          </div>
        </div>

        <div className="Unified-box">
          <div className="board-content">
            <h1 className="board-title">The Unified Nation</h1>
            <p className="board-description">The final gallery celebrates the birth of the empire through The Unification and The Birth of Civilization. Visitors trigger an animation of King Narmer merging the two lands under the Double Crown, explore the rise of Pharaohs and hieroglyphs, and type their names into a translator tool.</p>
          </div>
        </div>

        <div className='stick1'></div>
        <div className='stick2'></div>
        <div className='stick3'></div>
        <div className='stick4'></div>

        <div className='notebox'><p className='note'>Use desktop for better experience.</p></div>

        <div className="ground"></div>  
        <div className="Glow"></div>
      </div>

      {/* Renders safely dynamically on top of the stack when an item is selected */}
      {activeItem && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closePopup}>&times;</button>
            <div className="modal-body">
              <img src={activeItem.imgSrc} alt={activeItem.title} className="modal-img" />
              <h2>{activeItem.title}</h2>
              <p>{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Origin;