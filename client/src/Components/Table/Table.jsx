import React from 'react';

const Table = () => {
  return (
    <>
      <table className="table table-md table-hover table-dark table-striped table-responsive text-center mt-5 rounded-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">FULL URL</th>
                    <th scope="col">SHORT URL ID</th>
                    <th scope="col">CLICKS</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {/* {{#each url }} */}
                <tr>
                    <th scope="row">
                        {/* {{@index}} */}
                        </th>
                    <td className="text-truncate" style={{maxWidth:"100px"}}>
                        {/* {{this.FullUrl}} */}
                    </td>
                    <td>
                        <a className="text-primary text-decoration-none" href="{{this.ShortUrl}}">
                            {/* {{this.ShortUrl}} */}
                        </a>
                    </td>
                    <td>
                        <span>
                            {/* {{this.Clicks}} */}
                        </span>
                    </td>
                </tr>
                {/* {{/each}} */}
            </tbody>
        </table> 
    </>
  );
}

export default Table;
