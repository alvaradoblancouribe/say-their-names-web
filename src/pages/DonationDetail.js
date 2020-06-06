import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import ActionDetailsHeader from '../components/ui/actionDetailsHeader/ActionDetailsHeader';
import BackNavigation from '../components/backNavigation/BackNavigation';
import ActionDetailsContent from '../components/ui/actionDetailsContent/ActionDetailsContent';
import Container from '../components/common/Container';
import Spinner from '../components/common/Spinner';
import config from '../utils/config';

const { apiBaseUrl } = config;

const DonationDetail = ({ match }) => {
  const { id } = match.params;
  const [donationDetails, setDonationDetails] = useState([]); // this will hold the profles list fetched from the API
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/donations/${id}`);
        setDonationDetails(response.data.data);
        window.scrollTo(0, 0);
      } catch (error) {
        // set error and show error page
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner height="95vh" />
      ) : (
        <>
          <BackNavigation
            text="BACK TO DONATIONS"
            link={donationDetails.link}
            longText="Donate now to end Police brutality on minorities"
            linkText="DONATE"
            backLink="/donations"
            external
          />
          <Container>
            <ActionDetailsHeader
              title={donationDetails.title}
              link={donationDetails.link}
              action="DONATE"
            />
            <ActionDetailsContent
              description={donationDetails.description}
              outcome={donationDetails.outcome}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default DonationDetail;


DonationDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
};