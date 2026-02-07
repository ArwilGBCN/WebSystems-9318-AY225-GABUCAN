# College of Computer Studies - Academic Department Website

A professional academic department website built for the College of Computer Studies with modern design, interactive features, and clean code structure.

## 📁 Project Structure

```
ccs-website/
│
├── index.html              # Main HTML file
│
├── css/
│   └── style.css          # All styling and design
│
├── js/
│   ├── navigation.js      # Page navigation and navbar behavior
│   ├── programs.js        # Program tabs and accordion functionality
│   ├── faculty.js         # Faculty directory with search/filter
│   ├── announcements.js   # Dynamic announcement board
│   └── contact.js         # Contact form validation
│
└── assets/                # (For future images/media)
```

## ✨ Features

### Required Pages (6 Pages)
1. **Home** - Hero section with animated cards showcasing college highlights
2. **About the College** - Mission, vision, and statistics
3. **Academic Programs** - Undergraduate, Graduate, and Certification programs
4. **Faculty Directory** - Searchable and filterable faculty list
5. **Announcements/Events** - Dynamic announcement board
6. **Contact/Inquiry** - Contact form with validation

### JavaScript Functionalities

#### 1. Faculty Directory with Filtering and Search
- **File:** `js/faculty.js`
- Search faculty by name or expertise
- Filter by department (Computer Science, IT, Data Science)
- Dynamic rendering of faculty cards
- Real-time filtering

#### 2. Dynamic Announcement Board
- **File:** `js/announcements.js`
- Staggered animation on load
- Automatic detection when section becomes visible
- Sortable announcements with dates

#### 3. Interactive Program Details (Tabs + Accordion)
- **File:** `js/programs.js`
- Three category tabs (Undergraduate, Graduate, Certifications)
- Expandable/collapsible program details
- Smooth transitions

#### 4. Inquiry/Contact Form with Validation
- **File:** `js/contact.js`
- Real-time field validation
- Email format validation
- Required field checks
- Success/error messaging
- Form data handling

#### 5. JavaScript-Driven Navigation
- **File:** `js/navigation.js`
- Single-page application behavior
- Smooth section transitions
- Auto-hide navbar on scroll
- Active state management
- Handles ALL internal links (nav menu + CTA buttons)

## 🎨 Design Features

- **Academic Professionalism** - Clean, sophisticated design suitable for higher education
- **Custom Typography** - DM Serif Display for headings, Manrope for body text
- **Color Scheme** - Navy blue primary, coral accent, clean whites
- **Animations** - Floating cards, fade-ins, slide animations
- **Responsive Design** - Mobile-friendly layout
- **Student-Centered UX** - Intuitive navigation and accessibility

## 🚀 How to Deploy

### GitHub Pages Deployment

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - CCS Website"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/ccs-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "main" branch as source
   - Click Save
   - Your site will be live at: `https://yourusername.github.io/ccs-website/`

### Local Testing

Simply open `index.html` in any modern web browser:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or just double-click index.html
```

## 📋 Code Organization

### HTML Structure
- Semantic HTML5 markup
- Clear section divisions
- Accessible form elements
- Organized content hierarchy

### CSS Architecture
- CSS Custom Properties (variables)
- Mobile-first responsive design
- Component-based styling
- Consistent naming conventions
- Smooth animations and transitions

### JavaScript Modules
Each JavaScript file handles a specific feature:
- **Separation of Concerns** - Each file has one responsibility
- **Clean Functions** - Well-documented and reusable
- **Event Handling** - Efficient event listeners
- **Data Management** - Structured data arrays
- **No Dependencies** - Pure vanilla JavaScript

## 🔧 Customization

### Adding New Faculty Members
Edit `js/faculty.js`:
```javascript
const facultyData = [
    { 
        name: "Dr. Your Name", 
        role: "Professor", 
        department: "Computer Science", 
        expertise: "Your Field" 
    },
    // Add more...
];
```

### Adding New Announcements
Edit `js/announcements.js`:
```javascript
const announcements = [
    {
        date: "Month DD, YYYY",
        title: "Announcement Title",
        content: "Announcement content..."
    },
    // Add more...
];
```

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #0A2463;
    --accent: #FB3640;
    /* Modify as needed */
}
```

## ✅ Exam Requirements Checklist

- ✅ Minimum 5 pages (Has 6 pages)
- ✅ Faculty directory with filtering/search
- ✅ Dynamic announcement board
- ✅ Interactive program details (tabs + accordion)
- ✅ Contact form with validation
- ✅ JavaScript-driven navigation and UI
- ✅ Academic professionalism
- ✅ Clean and readable layout
- ✅ Student-centered usability
- ✅ Functional and meaningful JavaScript
- ✅ No template copying
- ✅ Ready for GitHub Pages deployment
- ✅ Public and accessible repository

## 📱 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for academic purposes.

## 👨‍💻 Developer Notes

This website demonstrates:
- Modern vanilla JavaScript patterns
- Component-based architecture
- Responsive web design
- Form validation best practices
- Smooth user interactions
- Professional UI/UX design

Built with attention to code quality, performance, and user experience.
