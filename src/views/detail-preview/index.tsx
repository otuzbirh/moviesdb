import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import request from './../../api/requests';
import s from './index.module.scss';

const DetailPreview = () => {
  const navigate = useNavigate();
  const { id, type } = useParams();

  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const returnBack = () => {
    navigate(-1);
  };

  const fetchDetails = async () => {
    setLoading(true);
    try {
      const response = await request().getDetails(type, id!);
      setApiData(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id, type]);

  console.log({apiData})

  return (
    <main className={s.container} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${apiData?.poster_path})`}}>      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <button className={s.container__button} onClick={returnBack}>
            Return Back
          </button>
          <section className={s.container__details}>
            {
              apiData?.video ?
                <iframe
                  height={400}
                  width={600}
                  src={apiData?.video as string}
                  title={apiData?.title || apiData?.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                /> : 
            
            <img
              src={`https://image.tmdb.org/t/p/w500/${apiData?.backdrop_path}`}
              className={s.container__details__image}
              alt={apiData?.title || apiData?.name}
            />
          }
            <h3 className={s.container__details__rated}>Rated: {apiData?.vote_average}</h3>
            <h2 className={s.container__details__title}>{apiData?.title || apiData?.name}</h2>
            <p className={s.container__details__date}>
              {apiData && apiData.release_date
                ? format(new Date(apiData.release_date), 'MMMM d, yyyy')
                : ''}
            </p>
          </section>
        </>
      )}
    </main>
  );
};

export default DetailPreview;
