import styled from 'styled-components';


const StyledCard = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    border: 1px black solid;
`
const Header = styled.div`
    height: 150px;
    background: black;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    padding: 2px 4px;
    text-align: start;
`

function Card(props) {
    return (
        <StyledCard>
            <Header>
                <h1>{props.data.nama_lengkap}</h1>
            </Header>
            <Container>
                <table>
                    <tr>
                        <td>Nama Lengkap</td>
                        <td>:</td>
                        <td>{props.data.nama_lengkap}</td>
                    </tr>
                    <tr>
                        <td>Nama Panggilan</td>
                        <td>:</td>
                        <td>{props.data.nama_panggilan}</td>
                    </tr>
                    <tr>
                        <td>NIM</td>
                        <td>:</td>
                        <td>{props.data.nim}</td>
                    </tr>
                    <tr>
                        <td>Nomor Telepon</td>
                        <td>:</td>
                        <td>{props.data.nomor_telepon}</td>
                    </tr>
                    <tr>
                        <td>ID Line</td>
                        <td>:</td>
                        <td>{props.data.id_line}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>{props.data.email}</td>
                    </tr>
                    <tr>
                        <td>Hobi</td>
                        <td>:</td>
                        <td>{props.data.hobi}</td>
                    </tr>
                    <tr>
                        <td>Tanggal Lahir</td>
                        <td>:</td>
                        <td>{props.data.tanggal_lahir}</td>
                    </tr>
                </table>
            </Container>
        </StyledCard>
    )
}

export default Card