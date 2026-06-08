export default function GenericTable({ columns, data, renderRow }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg">
        
        {/* HEADER */}
        <thead className="bg-hijau text-white">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-6 py-3 text-left text-sm font-semibold"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
          
          {/* kalau data kosong */}
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-6 text-center text-gray-400"
              >
                Data kosong
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr
                key={item.id || index}
                className="hover:bg-gray-50 transition"
              >
                {renderRow(item, index)}
              </tr>
            ))
          )}

        </tbody>
      </table>
    </div>
  );
}