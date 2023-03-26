import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Grid, TablePagination, TextField } from '@mui/material';
import { Usekey } from '../customComponents/keyboard/KeyboardIntraction';
import { CssTextField, CustomTextFieldForTable, ScannerTextField } from '../coreComponents/CustomInputField';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, date, city, link,) {
    return { name, date, city, link, };
}
// 2023-03-27
const rows = [
    { name: 'Bitcoin Energy Summit', date: "2023-03-27 To 2023-03-29", city: "Miami, FL, USA", link: "https://www.bitcoinenergysummit.com/" },
    { name: 'Fintech India and Blockchain Summit', date: "2023-03-27 To 2023-03-30", city: "New Delhi, India", link: "https://www.fintechindiaexpo.com/" },
    { name: "FinTech India Expo", date: "2023-03-27 To 2023-03-29", city: "New Delhi, India", link: "https://www.fintechindiaexpo.com/" },
    { name: 'Prague Gaming & TECH Summit', date: "2023-03-29 To 2023-03-31", city: "Prague, Czechia", link: "https://hipther.com/events/prague/" },
    { name: 'Wow Summit World of Web3', date: "2023-03-29 To 2023-03-30", city: "Hong Kong", link: "https://wowsummit.net/hong-kong-mar-2023/" },
    { name: 'American Metaverse Awards', date: "Mar 29, 2023 To 2023-03-30", city: "Miami, Florida", link: "https://www.americanmetaverseawards.com/" },
    { name: 'AW3 Summit 2023', date: "2023-03-30 To 2023-04-01", city: "Singapore", link: "https://www.techstorm.tv/summitx-2023/" },
    { name: 'Miami NFT Week 2023', date: "2023-03-31 To 2023-04-02", city: "Miami, FL", link: "https://miaminftweek.com/" },
    { name: 'Western Australia Web Conference', date: "2023-04-05 To 2023-04-06", city: "Nedlands", link: "https://waweb3.org/" },
    //change link from here
    { name: 'NFT NYC 2023', date: "2023-04-12 To 2023-04-14", city: "Timesquare, NY", link: "hhttps://www.nft.nyc/" },
    { name: 'Devconnect', date: "2023-04-18 To 2023-04-25", city: "Amsterdam, The Netherlands", link: "https://devconnect.org/" },
    { name: 'MIT Bitcoin Expo 2023', date: "2023-04-22 To 2023-04-23", city: "MIT Innovation Headquarters, Cambridge", link: "hhttps://www.mitbitcoinexpo.org/" },
    { name: 'Consensus 2023', date: "2023-04-26 To 2023-04-29", city: "Austin, TX, USA", link: "hhttps://bravenewcoin.com/events/consensus-2023" },
    { name: 'Tel Aviv Blockchain Week', date: "2023-05-01 To 2023-05-02", city: "Tel Aviv-Yafo, Israel", link: "https://www.tlvbw.io/" },
    { name: 'Blockchain Economy Istanbul Summit 2023', date: "2023-05-08 To 2023-05-11", city: "Istanbul, Turkey", link: "https://blockchaineconomy.istanbul/en" },
    { name: 'W3W', date: "2023-05-08 To 2023-05-13", city: "Jakarta, Yogyakarta, Bali, Indonesia", link: "https://web3weekend.asia/" },
    { name: 'NFT Tallinn', date: "2023-05-09 To 2023-05-10", city: "Estonia", link: "https://nfttallinn.com/" },
    { name: 'Security Token Summit 2023', date: "2023-05-09 To 2023-05-11", city: "New York, NY, USA", link: "https://dgh.events/event/security-token-summit" },
    { name: 'NexTech Week 2023', date: "2023-05-10 To 2023-05-11", city: "Tokyo, Japan", link: "https://bravenewcoin.com/events/nextech-week-2023-spring" },
    { name: 'MARE BALTICUM Gaming & TECH Summit', date: "2023-05-16 To 2023-05-18", city: "TRiga, Latvia", link: "https://hipther.com/events/riga/" },
    { name: 'TEAMZ Web3.0 Summit', date: "2023-05-17 To 2023-05-18", city: "Tokyo", link: "https://summit.teamz.co.jp/" },
    { name: 'Bitcoin Miami', date: "2023-05-18 To 2023-05-21", city: "Miami, FL, USA", link: "https://b.tc/conference/bitcoin2023#about" },
    { name: 'Veecon 2022', date: "2023-05-18 To 2023-05-20", city: "Minneapolis, Minnesota, USA", link: "https://veecon.co/" },
    { name: 'The Web3 Conference', date: "2023-05-19 To 2023-05-19", city: "Amsterdam, Netherlands", link: "https://www.theweb3.wtf/" },
    { name: 'RegTech Africa Conference', date: "2023-05-24 To 2023-05-26", city: "Lagos, Nigeria", link: "https://regtechafricaconference.com/" },
    { name: 'Next Block Expo Warsaw Summit 2023', date: "2023-05-24 To 2023-05-25", city: "Warsaw, Poland", link: "https://nextblockexpo.com/" },
    { name: 'Web3 Live', date: "2023-06-01 To 2023-06-02", city: "London", link: "https://techcircus.io/en/events/web3-live-london" },
    { name: 'Web3 Tales', date: "2023-06-01 To 2023-06-02", city: "Zagreb, Croatia", link: "https://web3tales.io/" },
    { name: 'Crypto Valley Conference', date: "2023-06-01 To 2023-06-02", city: "Rotkreuz, Switzerland", link: "https://www.cryptovalleyconference.com/" },
    { name: 'Non-fungible Conference', date: "2023-06-07 To 2023-06-08", city: "Lisbon, Portugal", link: "https://www.nonfungibleconference.com/" },
    { name: 'Blockchaincon Latam 2023', date: "2023-06-08 To 2023-06-10", city: "Lima, PE", link: "https://blockchaincon.la/" },
    //LINK TO BE CHANGE
    { name: 'Epick Web3 Conference', date: "2023-06-09 To 2023-06-09", city: "Lisbon, Portugal", link: "https://www.epicweb3.com/" },
    { name: 'Coin Bureau Live', date: "2023-06-10 To 2023-06-10", city: "London", link: "https://live.coinbureau.com/" },
    { name: 'FANS LOVE IT! Web3 Football and Sports Conference', date: "2023-06-10 To 2023-06-10", city: "Istanbul, Turkey", link: "https://fansloveit.com/" },
    { name: 'Metaverse Summit', date: "2023-06-12 To 2023-06-13", city: "Paris, France", link: "https://metaverse-summit.org/" },
    { name: '2nd Blockchain Oracle Summit', date: "2023-06-20 To 2023-06-22", city: "Stephanstraße 41, 10559 Berlin, Germany", link: "https://blockchainoraclesummit.io/" },
    { name: 'Blockchance 23', date: "2023-06-27 To 2023-06-30", city: "Hamburg, Germany", link: "https://blockchance.eu/" },
    { name: 'BlockDown Festival 2023', date: "2023-06-28 To 2023-06-30", city: "Albufeira, Portugal", link: "https://blockdownconf.com/" },
    { name: 'IVS Crypto 2023 Kyoto', date: "2023-06-28 To 2023-06-30", city: "Kyoto, Japan", link: "https://www.ivs.events/crypto" },
    
    
    { name: 'Block3000:Blockchain Battle', date: "2023-07-06 To 2023-06-07", city: "Lisbon, Portugal", link: "https://block3000.com/" },
    { name: 'Blockchain and Internet of Things Conference', date: "2023-07-07 To 2023-07-09", city: "Osaka, Japan", link: "http://www.biotc.net/" },
    { name: 'Blockdown Portugal 23', date: "2023-07-10 To 2023-07-12", city: "Algarve, Portugal", link: "https://blockdownconf.com/" },
    { name: 'International Congress on Blockchain', date: "2023-07-12 To 2023-07-14", city: "Portugal and Online", link: "https://www.blockchain-congress.net/" },
    { name: 'ETHCC Paris', date: "2023-07-17 To 2023-07-20", city: "Paris, France", link: "https://www.ethcc.io/" },
    { name: 'ETHWomen', date: "2023-08-13 To 2023-08-16", city: "Toronto, Canada", link: "https://www.ethwomen.com/" },
    { name: 'ETHToronto', date: "2023-08-13 To 2023-08-16", city: "Toronto, Canada", link: "https://www.ethtoronto.ca/" },
    { name: 'Blockchain Futurist Conference', date: "2023-08-15 To 2023-08-16", city: "Toronto, Canada", link: "https://www.futuristconference.com/" },
    { name: 'Coinfest Asia 2023', date: "2023-08-24 To 2023-08-25", city: "Bali, Indonesia", link: "https://coinfest.asia/" },
    { name: 'COINFEST ASIA', date: "2023-08-24 To 2023-08-25", city: "Bali, Indonesia", link: "https://coinfest.asia/" },
    { name: 'The Science of Blockchain Conference 2023', date: "2023-08-28 To 2023-08-30", city: "Stanford, CA", link: "https://cbr.stanford.edu/sbc23/" },
    { name: 'Nordic Blockchain Conference 2023', date: "2023-09-07 To 2023-09-08", city: "Copenhagen, Denmark", link: "https://www.nordicblockchainconference.com/" },
    { name: 'Permissionless', date: "2023-09-11 To 2023-09-13", city: "Austin, Texas, USA", link: "https://blockworks.co/event/permissionless-2023" },
    { name: 'Token 2049', date: "2023-09-13 To 2023-09-14", city: "Singapore", link: "https://www.token2049.com/" },
    { name: 'DMEXCO 2023', date: "2023-09-20 To 2023-09-21", city: "Cologne, Germany", link: "https://www.w3.vision/" },
    { name: 'Blockchain Expo Europe', date: "2023-09-26 To 2023-09-27", city: "Rai, Amsterdam, The Netherlands", link: "https://blockchain-expo.com/europe/" },
    { name: 'Pacific Bitcoin Festival 2023', date: "2023-10-05 To 2023-10-06", city: "Sta. Monica, California", link: "https://www.pacificbitcoin.com/" },
    { name: 'DeGameFi', date: "2023-10-07 To 2023-06-08", city: "Tbilisi, Georgia", link: "https://degamefi.io/" },
    { name: 'Future Blockchain Summit', date: "2023-10-15 To 2023-10-18", city: "Dubai", link: "https://www.futureblockchainsummit.com/welcome" },
    { name: 'European Metaverse Summit and Awards', date: "2023-10-25 To 2023-10-25", city: "Berlin, Germany", link: "https://www.europeanmetaverseawards.com/" },

    //2nd
    { name: 'Paris Blockchain Week', date: "2023-03-20 To 2023-03-24", city: "Paris, France", link: "https://www.parisblockchainweek.com/" },
    { name: 'American Metaverse Award', date: "2023-03-29 To 2023-03-30", city: "Miami, FL", link: "https://www.americanmetaverseawards.com/" },
    


];

export default function EventTable() {


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const init = {
        name: "",
        date: "2023-03-27",
        city: "",
      };
      const [searchValues, setSearchValues] = React.useState(init);


      const [data, setData] = React.useState(rows);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleNavigate = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    const handleSearchKeys = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
          setSearchValues({ name: value });
        } else if (name === "city") {
          setSearchValues({ city: value });
        } else if (name === "date") {
          setSearchValues({ date: value });
        }
      };

  

    const handleSearch = () => {
      
        if (searchValues?.name) {
            const filterData = data.filter((el) =>
                el.name.toLowerCase().includes(searchValues?.name?.toLowerCase())
            );
            setData(filterData);
        } else if (searchValues?.city) {
            const filterData = data.filter((el) =>
                el.city.toLowerCase().includes(searchValues?.city?.toLowerCase())
            );
            setData(filterData);
        } else if (searchValues?.date) {
            const filterData = data.filter((el) =>
                el.date
                    .toLowerCase()
                    .includes(searchValues?.date?.toLowerCase())
            );
            setData(filterData);
        }
    };


    Usekey("Enter", handleSearch);
    Usekey("NumpadEnter", handleSearch);


 //refres
 const handleRefresh = () => {
   setData(rows)
  };

    const handleReset = () => {
        setSearchValues({
          name: "",
          date: "",
          city: "",
        });
        handleRefresh();
      };
    console.log(data,"data")
    return (

        <>

            <Paper elevation={6} sx={{marginTop:"2em", paddingBottom:"1em",background:"transparent"}}>
                <Grid container spacing={2} sx={{width:"95%",margin:"auto"}}>
                    <Grid item xs={12} md={3}>
                       

    <CustomTextFieldForTable
    variant='outlined'
    name="name" label="Event Name" onChange={handleSearchKeys} value={searchValues?.name}
    />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CustomTextFieldForTable name="city" label="Event City" onChange={handleSearchKeys} value={searchValues?.city} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CustomTextFieldForTable name="date" label="Event Date" onChange={handleSearchKeys} value={searchValues?.date} type="date" />
                    </Grid>
                    <Grid item xs={12} md={1.5} >
                        <Button 
                        sx={{marginRight:"1em"}}
                        variant='contained'
                        >Search</Button>
                      
                    </Grid>
                    <Grid item xs={12} md={1.5}  >
                        
                        <Button 
                        variant='outlined'
                        onClick={handleReset}
                        >Reset</Button>
                    </Grid>
                </Grid>
            </Paper>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Date</StyledTableCell>
                            <StyledTableCell align="center">City</StyledTableCell>
                            <StyledTableCell align="center">Link</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.date}</StyledTableCell>
                                <StyledTableCell align="center">{row.city}</StyledTableCell>
                                <StyledTableCell align="left" sx={{ cursor: "pointer" }} onClick={() => handleNavigate(row.link)} >
                                    <LanguageIcon />
                                    {row.link}
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination

                    rowsPerPageOptions={[10, 25, 100]}
                    component="Paper"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </>

    );
}
