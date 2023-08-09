interface TokensGridProps {
  token: Record<string, string>
}

export function TokensGrid({ token }: TokensGridProps) {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Value</th>
      </thead>

      <tbody>
        {Object.entries(token).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
