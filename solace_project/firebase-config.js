/**
 * ╔══════════════════════════════════════════════════════╗
 * ║         SOLACE — FIREBASE CONFIGURATION             ║
 * ║  Edit this file once. Both apps read from here.     ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * HOW TO GET THESE VALUES:
 *  1. Go to https://console.firebase.google.com
 *  2. Open your project → ⚙️ Project Settings
 *  3. Scroll to "Your apps" → click </> Web app
 *  4. Copy each value below from the firebaseConfig shown
 *
 * Full guide: open SETUP_GUIDE.html in your browser
 */

export const firebaseConfig = {
  apiKey: "AIzaSyBsZemdY7lXtV3YXMBaDdn3oii2yEWjA84",
  authDomain: "solace-daabc.firebaseapp.com",
  databaseURL: "https://solace-daabc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "solace-daabc",
  storageBucket: "solace-daabc.firebasestorage.app",
  messagingSenderId: "939212599928",
  appId: "1:939212599928:web:204aad338cd54e34a3338d"
};
/**
 * ADMIN CREDENTIALS (change these before deploying!)
 * Admin login is checked in admin.html
 */
export const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123"
};

/**
 * DEMO APARTMENTS
 * These are used when Firebase is NOT yet configured.
 * Once Firebase is set up, apartments are managed via the Admin Panel.
 */
export const DEMO_APARTMENTS = {
  "A-101": { passcode: "1234", name: "Meena Krishnan",   email: "meena@example.com",   contacts: [{ name: "Son",      phone: "9876543210" }, { name: "Daughter", phone: "8765432109" }] },
  "A-305": { passcode: "5678", name: "selvadharshini",   email: "selvadharshinims@gmail.com", contacts: [{ name: "son", phone: "8056116846" }, { name: "daughter", phone: "6379311304" }] },
  "B-102": { passcode: "2345", name: "Rajan Pillai",     email: "rajan@example.com",    contacts: [{ name: "Son",      phone: "7654321098" }] },
  "B-204": { passcode: "6789", name: "Lakshmi Devi",     email: "lakshmi@example.com",  contacts: [{ name: "Daughter", phone: "9123456780" }] },
};
