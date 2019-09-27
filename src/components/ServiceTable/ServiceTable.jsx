import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ServiceTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ margin: 10 }}>
                <span style={{ backgroundColor: 'lightgray' }}>{this.props.serviceKey}</span>
                {this.props.serviceData &&
                    <div>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>БД</TableCell>
                                    <TableCell>Доступность</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.props.serviceData && Object.keys(this.props.serviceData).map(key => {
                                        return (
                                            <TableRow key={key}>
                                                <TableCell>
                                                    {key}
                                                </TableCell>
                                                <TableCell>
                                                    {this.props.serviceData[key].state && this.props.serviceData[key].state == 1 && <div>+</div>}
                                                    {(!this.props.serviceData[key].state || this.props.serviceData[key].state == 0) && <div>-</div>}
                                                </TableCell>
                                            </TableRow>
                                        );

                                    })
                                }
                            </TableBody>
                        </Table>
                    </div>
                }
                {!this.props.serviceData && <span> недоступен</span>}
            </div>
        );
    }
}

export { ServiceTable as ServiceTable };