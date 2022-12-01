import React from 'react';

export default function Pagination({ page, setPage, disable = true }) {
	return (
		<>
			{
				page === 1 && disable ?
					// it will show nothing when both navigations(prev and next) are disabled
					<></>
				:
					<>
						{/* pagination buttons */}
						<div className='text-center padding-10'>
							{/* Previous Button */}
							<button className='next-prev-button' disabled={page === 1 ? true : false} onClick={() => setPage((page) => page - 1)}>
								{'<- Previous'}
							</button>
							{/* Page number */}
							<span style={{ padding: '5px' }}>
								{
									page === 1 ?
										'-' :
										<a onClick={() => setPage((page) => page - 1)} > {`${page - 1}`} </a>
								}
								&nbsp; <b className='padding-5 pagination-focus' style={{ fontSize: '20px' }} >{page}</b> &nbsp;
								{
									disable ?
										'-' :
										<a onClick={() => setPage((page) => page + 1)} > {`${page + 1}`} </a>
								}
							</span>
							{/* Next Button */}
							<button className='next-prev-button' disabled={disable ? true : false} onClick={() => setPage((page) => page + 1)}>
								{'Next ->'}
							</button>
						</div>
					</>
			}
		</>
	)
}
