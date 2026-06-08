import axios from 'axios'

const API_URL = "https://awbxyuyctrtfdaaflrvw.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3Ynh5dXljdHJ0ZmRhYWZscnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NjE5MzAsImV4cCI6MjA5NjQzNzkzMH0.-RRjOUmkce9gsV3mjFbOMQVrsQJ3hOH_WNgNeTcbfxg"

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const notesAPI = {
  // GET NOTES
  async fetchNotes() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  // CREATE NOTE
  async createNote(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  // DELETE NOTE
  async deleteNote(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};