import React from 'react'
const TOKEN =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA4MDhlNGQwOTU4ODBlODE4ZjRjMjkiLCJlbWFpbCI6InV0cGFsQHNvbHVsYWIuY29tIiwidXNlcm5hbWUiOiJ1dHBhbEBzb2x1bGFiLmNvbSIsImxhc3RuYW1lIjoiQmV0YWkiLCJmaXJzdG5hbWUiOiJVdHBhbCIsImlhdCI6MTYyMTYwNjQ3OCwiZXhwIjoxNjIyODE2MDc4fQ.gvBFoMp_CfpaxeKzJiNREK2voJXrIbkJ-rVIUcHPCWU'
const ID = '600808e4d095880e818f4c29'

export default function App() {
	return (
		<div>
			<div className="ui four column doubling stackable grid container">
				<div className="column">
					<button
						class="ui primary button"
						onClick={() => navigator.clipboard.writeText(TOKEN)}
					>
						Token
					</button>
				</div>
				<div className="column">
					<button
						class="ui  button"
						onClick={() => navigator.clipboard.writeText(ID)}
					>
						ID
					</button>
				</div>
			</div>
		</div>
	)
}
