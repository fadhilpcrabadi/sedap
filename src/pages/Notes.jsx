import { useState, useEffect } from "react";
import { notesAPI } from "../services/notesAPI";
import GenericTable from "../components/GenericTable";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import { AiFillDelete } from "react-icons/ai";

export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [notes, setNotes] = useState([]);

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "",
  });

  // HANDLE INPUT
  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // CREATE NOTE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.createNote(dataForm);

      setSuccess("Catatan berhasil ditambahkan!");

      setDataForm({
        title: "",
        content: "",
        status: "",
      });

      setTimeout(() => setSuccess(""), 3000);

      loadNotes();
    } catch (err) {
      setError('Terjadi kesalahan: ${err.message}');
    } finally {
      setLoading(false);
    }
  };

  // DELETE NOTE
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus catatan ini?"
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);

      setSuccess("Catatan berhasil dihapus!");

      loadNotes();
    } catch (err) {
      setError('Terjadi kesalahan: ${err.message}');
    } finally {
      setLoading(false);
    }
  };

  // GET NOTES
  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // AUTO LOAD
  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Notes App
        </h2>
      </div>

      {/* ERROR */}
      {error && (
        <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-700">
          {error}
        </div>
      )}

      {/* SUCCESS */}
      {success && (
        <div className="mb-4 rounded-lg bg-green-100 p-3 text-green-700">
          {success}
        </div>
      )}

      {/* FORM */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">
          Tambah Catatan Baru
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={dataForm.title}
            placeholder="Judul catatan"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border"
          />

          <textarea
            name="content"
            value={dataForm.content}
            placeholder="Isi catatan"
            onChange={handleChange}
            disabled={loading}
            required
            rows="4"
            className="w-full p-3 bg-gray-50 rounded-2xl border resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-emerald-600 text-white rounded-2xl disabled:opacity-50"
          >
            {loading ? "Mohon Tunggu..." : "Tambah Data"}
          </button>
        </form>
      </div>

      {/* LOADING */}
      {loading && (
        <LoadingSpinner text="Memuat catatan..." />
      )}

      {/* EMPTY */}
      {!loading && notes.length === 0 && !error && (
        <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
      )}

      {!loading && notes.length === 0 && error && (
        <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
      )}

      {/* TABLE */}
      {!loading && notes.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold">
              Daftar Catatan ({notes.length})
            </h3>
          </div>

          <GenericTable
            columns={[
              "#",
              "Judul",
              "Isi Catatan",
              "Aksi",
            ]}
            data={notes}
            renderRow={(note, index) => (
              <>
                <td className="px-6 py-4 font-medium text-gray-700">
                  {index + 1}.
                </td>

                <td className="px-6 py-4">
                  <div className="font-semibold text-emerald-600">
                    {note.title}
                  </div>
                </td>

                <td className="px-6 py-4 max-w-xs">
                  <div className="truncate text-gray-600">
                    {note.content}
                  </div>
                </td>

                {/* ACTION DELETE */}
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(note.id)}
                    disabled={loading}
                    className="text-red-500 hover:text-red-700"
                  >
                    <AiFillDelete className="text-2xl" />
                  </button>
                </td>
              </>
            )}
          />
        </div>
      )}
    </div>
  );
}