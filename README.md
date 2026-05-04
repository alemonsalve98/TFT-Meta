# TFT·META — Set 16 Comp Builder & Tier List

A world-class, vanilla JavaScript toolkit for Teamfight Tactics (TFT) Set 16. This project provides a real-time Meta Tier List, an Item Database with advanced filtering, and a robust Composition Builder with game-code integration.

## 🚀 Features

### 1. Composition Builder (`comp-builder.html`)
*   **Interactive Hex Board:** Drag-and-drop champions onto a 4x7 grid with correct hex-offset logic.
*   **Click-to-Assign Items:** Improved UX using a "Select Item -> Click Unit" flow to avoid drag-and-drop collisions.
*   **Real-time Trait Engine:** Dynamic calculation of active traits and thresholds based on board state.
*   **Team Planner Export:** Generates official Riot Games Team Planner strings (e.g., `01...TFTSet16`) for direct import into the game client.
*   **Custom Import/Export:** Uses a proprietary Base64 encoding (prefixed with `TFT:`) to share compositions via URL parameters.

### 2. Meta Tier List (`index.html`)
*   **Dynamic Ranking:** Compositions categorized from S to D Tier based on average placement and Top 4 rates.
*   **Positioning Guides:** Visual hex-grid positioning for every meta team.
*   **Strategic Insights:** Recommended augments, carousels priorities, and "When to Play" tips.

### 3. Item Database (`tft-items.html`)
*   **Multi-tier Filtering:** Filter by category (Completo, Componente, Emblema) or Tier.
*   **Live Search:** Instant fuzzy search across item names and descriptions.
*   **Recipe Tooltips:** View component requirements and "Best On" champion recommendations.

## 🛠 Technical Implementation

*   **Engine:** Pure Vanilla JavaScript (ES6+) — No heavy frameworks (React/Vue) to ensure maximum performance and low latency.
*   **Data Sourcing:**
    *   **CommunityDragon:** Fetches live game data and Team Planner IDs from `raw.communitydragon.org`.
    *   **SunderArmor Assets:** High-quality imagery for champions and items.
*   **State Management:** Centralized `STATE` objects in each module to manage board positions and selection buffers.
*   **Clipboard API:** Custom fallback logic for `execCommand('copy')` to ensure clipboard functionality across both HTTP and HTTPS environments.

## 📂 Project Structure

*   `index-main.js`: Logic for the meta landing page and composition cards.
*   `comp-builder-main.js`: Core engine for the drag-and-drop hex board and trait calculations.
*   `tft-items-main.js`: Item database management, filtering logic, and recipe mapping.

## 🔧 Getting Started

1.  Clone the repository.
2.  Open `index.html` in any modern web browser.
3.  No build step or `npm install` is required as the project uses native ES6 modules and external asset CDNs.

## ⚖ Disclaimer

TFT·META isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.

---
*Built for the TFT community by software engineering enthusiasts.*
