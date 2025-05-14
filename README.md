# Sorting Algorithms Visualizer

A modern, interactive visualization tool for understanding popular sorting algorithms through dynamic animations and real-time statistics.

## 🎯 Features

- **Interactive Visualization**: Watch sorting algorithms in action with smooth CSS animations
- **Multiple Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, Heap Sort, and Merge Sort
- **Customizable Input**: Sort an array of positive integers or generate random arrays
- **Speed Control**: Adjust animation speed from 1x to 10x for optimal learning pace
- **Real-time Statistics**: Track swaps, comparisons, and execution time for each algorithm
- **Side-by-side Comparison**: View all algorithms simultaneously in "All" mode
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Keyboard Controls**: Use spacebar to start/pause sorting


## 🛠️ Technologies Used

- **Frontend Framework**: React + Hooks
- **Styling**: Styled Components + Material-UI
- **State Management**: Zustand
- **Build Tool**: Vite
- **Layout**: CSS Flexbox

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/m-manish03/Sorting-Algorithms-Visualizer.git
cd Sorting-Algorithms-Visualizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎮 Usage

1. **Input Array**: Enter numbers manually or click "Generate Random Array"
2. **Select Algorithm**: Choose from the tabs (Bubble, Selection, Insertion, etc.) or select "All" for comparison
3. **Adjust Speed**: Use the speed slider to control the animation pace
4. **Control Playback**: 
   - Click play/pause buttons
   - Use spacebar for quick start/stop
   - Click reset to restart

## 🏗️ Key Implementation Details

- **Async Generators**: Used for controlled step-by-step algorithm execution
- **FLIP Animations**: Smooth transitions using CSS transforms
- **Responsive Design**: Adaptive array sizing based on screen width
- **Performance Optimized**: Efficient state management and minimal re-renders


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by various sorting algorithm visualizations
- Thanks to the open-source community for the amazing tools
