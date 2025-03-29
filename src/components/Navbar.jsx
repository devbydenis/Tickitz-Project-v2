import React, { useState } from "react";
import avatar from '../assets/avatar.png'
import Button from "./Button";
import {Link, NavLink} from "react-router";

function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(true)
  const userLogin = JSON.parse(localStorage.getItem('userLogin'))
  const { isLogin } = userLogin
  const showMenu = () => {
    setIsShowMenu(!isShowMenu)
  }
  const isLoginUser = () => {
    // const getLoginInfo = JSON.parse(localStorage.getItem("user"));
    // const { isLogin } = getLoginInfo;
    if (isLogin) {
      return (
        <>
          <li>location</li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </li>
          <li>
            <Link to={'profile'}>
              <img
                src={avatar}
                alt="avatar"
                width={56}
                height={56}
              />
            </Link>
          </li>
        </>
      );
    }
    return (
      <>
        <li>
          <Link to="/auth">
            <Button className={"bg-background text-primary"} name="Sign In" />
          </Link>
        </li>
        <li>
          <Link to="/auth/new">
            <Button className={"bg-primary text-background"} name="Sign Up" />
          </Link>
        </li>
      </>
    );
  };
  return (
    <>
      <header className="bg-white">
        <nav className="justify-between xl:justify-evenly items-center px-6 py-4 hidden md:flex">
          <svg
            width="130"
            height="52"
            viewBox="0 0 130 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3997 41.0807H8.79648V18.046H0.352539V12.2823H22.824V18.046H14.3997V41.0807ZM31.5423 13.7282C31.5423 14.237 31.4444 14.7123 31.2483 15.1541C31.0656 15.5959 30.811 15.9842 30.4844 16.3189C30.1578 16.6402 29.7726 16.9013 29.3285 17.1021C28.8973 17.2895 28.4338 17.3833 27.9373 17.3833C27.4411 17.3833 26.9709 17.2895 26.5268 17.1021C26.0958 16.9013 25.717 16.6402 25.3905 16.3189C25.0771 15.9842 24.8224 15.5959 24.6264 15.1541C24.4436 14.7123 24.3522 14.237 24.3522 13.7282C24.3522 13.2329 24.4436 12.7643 24.6264 12.3225C24.8224 11.8673 25.0771 11.479 25.3905 11.1577C25.717 10.823 26.0958 10.5619 26.5268 10.3745C26.9709 10.1737 27.4411 10.0732 27.9373 10.0732C28.4338 10.0732 28.8973 10.1737 29.3285 10.3745C29.7726 10.5619 30.1578 10.823 30.4844 11.1577C30.811 11.479 31.0656 11.8673 31.2483 12.3225C31.4444 12.7643 31.5423 13.2329 31.5423 13.7282ZM30.6216 41.0807H25.2338V19.5723H30.6216V41.0807ZM53.0538 23.8498L49.1353 27.8864C48.9395 27.3241 48.6718 26.8221 48.3321 26.3802C47.9926 25.9251 47.6074 25.5435 47.1763 25.2355C46.7584 24.9276 46.3013 24.6933 45.8048 24.5326C45.3086 24.372 44.7991 24.2917 44.2767 24.2917C43.5453 24.2917 42.8531 24.4456 42.2001 24.7536C41.56 25.0615 40.9983 25.4966 40.5152 26.0589C40.045 26.6078 39.6726 27.2639 39.3985 28.0271C39.1243 28.7902 38.9871 29.6336 38.9871 30.5574C38.9871 31.307 39.1243 32.0101 39.3985 32.6662C39.6726 33.3221 40.045 33.8979 40.5152 34.3931C40.9983 34.8885 41.56 35.2768 42.2001 35.5579C42.8531 35.8392 43.5453 35.9796 44.2767 35.9796C44.7991 35.9796 45.302 35.9061 45.7853 35.7588C46.2687 35.6116 46.7191 35.404 47.1372 35.1361C47.5681 34.8551 47.9469 34.5203 48.2735 34.132C48.6129 33.7304 48.8874 33.2886 49.0963 32.8066L53.0145 36.8433C52.5183 37.5663 51.9435 38.2156 51.2905 38.7911C50.6504 39.3669 49.9517 39.8556 49.1942 40.2573C48.4498 40.6589 47.6596 40.9603 46.8237 41.161C46.0009 41.3751 45.1519 41.4823 44.2767 41.4823C42.8009 41.4823 41.41 41.201 40.1038 40.6389C38.8108 40.0631 37.6745 39.28 36.6949 38.2891C35.7282 37.2984 34.9643 36.1402 34.4025 34.8148C33.8411 33.4893 33.5602 32.0704 33.5602 30.5574C33.5602 28.9106 33.8411 27.371 34.4025 25.9384C34.9643 24.5059 35.7282 23.2608 36.6949 22.2031C37.6745 21.132 38.8108 20.2885 40.1038 19.6727C41.41 19.0568 42.8009 18.7489 44.2767 18.7489C45.1519 18.7489 46.0073 18.8627 46.8432 19.0903C47.6922 19.3179 48.4955 19.6526 49.253 20.0944C50.0237 20.5228 50.7288 21.0517 51.3689 21.6809C52.0218 22.3102 52.5836 23.0332 53.0538 23.8498ZM61.0667 41.0807H55.679V11.0171H61.0667V29.975L69.0403 19.6124H75.1923L68.2373 28.5692L75.1923 41.0807H69.0403L64.7891 33.2686L61.0667 38.3294V41.0807ZM83.6166 13.7282C83.6166 14.237 83.5185 14.7123 83.3227 15.1541C83.1397 15.5959 82.8851 15.9842 82.5587 16.3189C82.2321 16.6402 81.8467 16.9013 81.4026 17.1021C80.9717 17.2895 80.5081 17.3833 80.0117 17.3833C79.5155 17.3833 79.0452 17.2895 78.6012 17.1021C78.17 16.9013 77.7913 16.6402 77.4649 16.3189C77.1514 15.9842 76.8968 15.5959 76.7007 15.1541C76.518 14.7123 76.4265 14.237 76.4265 13.7282C76.4265 13.2329 76.518 12.7643 76.7007 12.3225C76.8968 11.8673 77.1514 11.479 77.4649 11.1577C77.7913 10.823 78.17 10.5619 78.6012 10.3745C79.0452 10.1737 79.5155 10.0732 80.0117 10.0732C80.5081 10.0732 80.9717 10.1737 81.4026 10.3745C81.8467 10.5619 82.2321 10.823 82.5587 11.1577C82.8851 11.479 83.1397 11.8673 83.3227 12.3225C83.5185 12.7643 83.6166 13.2329 83.6166 13.7282ZM82.6957 41.0807H77.3082V19.5723H82.6957V41.0807ZM97.3111 41.0807C96.018 41.0807 94.8033 40.8331 93.667 40.3376C92.5307 39.829 91.5317 39.1394 90.6695 38.2691C89.8205 37.3854 89.1478 36.3612 88.6516 35.1965C88.1683 34.0317 87.9267 32.7866 87.9267 31.4611V25.0749H85.3211V19.6124H87.9267V11.0171H93.2556V19.6124H101.366V25.0749H93.2556V31.4611C93.2556 32.0369 93.36 32.579 93.5691 33.0879C93.778 33.5831 94.0653 34.0183 94.431 34.3931C94.7969 34.7682 95.2278 35.0692 95.724 35.2968C96.2205 35.5112 96.7493 35.6182 97.3111 35.6182H101.366V41.0807H97.3111ZM120.762 41.0807H103.267L112.103 25.0749H103.267V19.6124H120.762L111.926 35.6182H120.762V41.0807Z"
              fill="#1D4ED8"
            />
            <path
              d="M127.795 24.4221C127.79 24.4197 127.786 24.4183 127.782 24.4162L126.032 23.38C125.923 23.5072 125.774 23.5918 125.611 23.6193C125.448 23.6469 125.281 23.6157 125.138 23.531C124.995 23.4463 124.885 23.3133 124.826 23.1547C124.768 22.9961 124.765 22.8218 124.819 22.6613L123.057 21.618C123.009 21.5901 122.953 21.5826 122.9 21.597C122.848 21.6115 122.803 21.6469 122.775 21.6953L117.545 30.9828L117.544 30.9833C117.531 31.0072 117.522 31.0338 117.518 31.0612C117.515 31.0889 117.517 31.1166 117.524 31.1435C117.531 31.1703 117.543 31.1953 117.559 31.2175C117.576 31.2394 117.596 31.2578 117.62 31.2718L119.382 32.3137C119.491 32.1868 119.64 32.1023 119.803 32.0746C119.966 32.0472 120.133 32.0785 120.276 32.1629C120.419 32.2476 120.529 32.3803 120.587 32.5386C120.646 32.6968 120.649 32.8709 120.596 33.0313L122.336 34.0598C122.343 34.0653 122.35 34.071 122.357 34.0757C122.381 34.0897 122.407 34.0984 122.434 34.1023C122.46 34.1058 122.488 34.1039 122.514 34.0968C122.54 34.0897 122.564 34.0773 122.586 34.0603C122.607 34.0436 122.625 34.0225 122.639 33.9984V33.9986L127.87 24.7105C127.884 24.6865 127.892 24.66 127.896 24.6325C127.899 24.605 127.898 24.5771 127.89 24.5503C127.884 24.5235 127.871 24.4985 127.855 24.4764C127.839 24.4544 127.818 24.436 127.795 24.4221ZM126.295 25.1431L122.217 32.3834C122.203 32.4075 122.185 32.4286 122.164 32.4453C122.142 32.4623 122.118 32.4747 122.092 32.4818C122.066 32.4889 122.038 32.4908 122.012 32.4873C121.985 32.4837 121.959 32.4747 121.935 32.4607L119.195 30.8388C119.172 30.8248 119.151 30.8065 119.135 30.7845C119.118 30.7626 119.106 30.7374 119.099 30.7108C119.092 30.6839 119.09 30.6559 119.094 30.6285C119.098 30.6011 119.106 30.5745 119.12 30.5506L123.198 23.3103C123.225 23.2619 123.27 23.2265 123.323 23.212C123.375 23.1976 123.431 23.2051 123.479 23.2331L126.219 24.8551C126.243 24.8689 126.263 24.8873 126.28 24.9093C126.296 24.9313 126.308 24.9563 126.315 24.9831C126.322 25.0099 126.324 25.0377 126.321 25.0652C126.317 25.0927 126.308 25.1191 126.295 25.1431Z"
              fill="#1D4ED8"
            />
            <path
              d="M124.098 27.6533L123.23 27.4878L123.108 26.6371C123.106 26.6246 123.101 26.6129 123.092 26.6038C123.083 26.5946 123.072 26.5884 123.06 26.5861C123.048 26.5837 123.035 26.5852 123.024 26.5905C123.013 26.5957 123.003 26.6045 122.997 26.6154L122.576 27.3628L121.73 27.2015C121.718 27.1992 121.705 27.2008 121.694 27.2061C121.683 27.2114 121.673 27.2201 121.667 27.2311C121.661 27.242 121.658 27.2546 121.659 27.2672C121.66 27.2798 121.665 27.2918 121.673 27.3014L122.233 27.9724L121.812 28.7196C121.806 28.7308 121.803 28.7434 121.804 28.756C121.805 28.7689 121.81 28.781 121.818 28.7906C121.826 28.8002 121.837 28.8067 121.849 28.8098C121.862 28.8128 121.874 28.812 121.886 28.8073L122.665 28.4903L123.239 29.1783C123.247 29.1876 123.258 29.1945 123.27 29.1975C123.282 29.2005 123.294 29.1997 123.306 29.1953C123.317 29.1909 123.327 29.1829 123.334 29.1725C123.341 29.1621 123.344 29.1498 123.344 29.1372L123.329 28.2148L124.116 27.7667C124.127 27.7605 124.136 27.7511 124.141 27.7398C124.146 27.7284 124.148 27.7157 124.146 27.7032C124.144 27.6908 124.138 27.6794 124.13 27.6705C124.121 27.6615 124.11 27.6555 124.098 27.6533Z"
              fill="#1D4ED8"
            />
          </svg>
          <ul className="flex gap-5">
            <Link
              className="text-title-info-first font-medium hover:underline underline-offset-4"
              to="/"
            >
              <li>Home</li>
            </Link>
            <Link
              className="text-title-info-first font-medium hover:underline underline-offset-4"
              to="movie/all"
            >
              <li>Movie</li>
            </Link>
            <Link
              className="text-title-info-first font-medium hover:underline underline-offset-4"
              to="movie/all"
            >
              <li>Buy Ticket</li>
            </Link>
          </ul>
          <ul className="flex gap-2 items-center">
            {isLoginUser()}
          </ul>
        </nav>
        <nav className="flex justify-between py-4 px-6 md:hidden">
          <svg
            width="130"
            height="52"
            viewBox="0 0 130 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3997 41.0807H8.79648V18.046H0.352539V12.2823H22.824V18.046H14.3997V41.0807ZM31.5423 13.7282C31.5423 14.237 31.4444 14.7123 31.2483 15.1541C31.0656 15.5959 30.811 15.9842 30.4844 16.3189C30.1578 16.6402 29.7726 16.9013 29.3285 17.1021C28.8973 17.2895 28.4338 17.3833 27.9373 17.3833C27.4411 17.3833 26.9709 17.2895 26.5268 17.1021C26.0958 16.9013 25.717 16.6402 25.3905 16.3189C25.0771 15.9842 24.8224 15.5959 24.6264 15.1541C24.4436 14.7123 24.3522 14.237 24.3522 13.7282C24.3522 13.2329 24.4436 12.7643 24.6264 12.3225C24.8224 11.8673 25.0771 11.479 25.3905 11.1577C25.717 10.823 26.0958 10.5619 26.5268 10.3745C26.9709 10.1737 27.4411 10.0732 27.9373 10.0732C28.4338 10.0732 28.8973 10.1737 29.3285 10.3745C29.7726 10.5619 30.1578 10.823 30.4844 11.1577C30.811 11.479 31.0656 11.8673 31.2483 12.3225C31.4444 12.7643 31.5423 13.2329 31.5423 13.7282ZM30.6216 41.0807H25.2338V19.5723H30.6216V41.0807ZM53.0538 23.8498L49.1353 27.8864C48.9395 27.3241 48.6718 26.8221 48.3321 26.3802C47.9926 25.9251 47.6074 25.5435 47.1763 25.2355C46.7584 24.9276 46.3013 24.6933 45.8048 24.5326C45.3086 24.372 44.7991 24.2917 44.2767 24.2917C43.5453 24.2917 42.8531 24.4456 42.2001 24.7536C41.56 25.0615 40.9983 25.4966 40.5152 26.0589C40.045 26.6078 39.6726 27.2639 39.3985 28.0271C39.1243 28.7902 38.9871 29.6336 38.9871 30.5574C38.9871 31.307 39.1243 32.0101 39.3985 32.6662C39.6726 33.3221 40.045 33.8979 40.5152 34.3931C40.9983 34.8885 41.56 35.2768 42.2001 35.5579C42.8531 35.8392 43.5453 35.9796 44.2767 35.9796C44.7991 35.9796 45.302 35.9061 45.7853 35.7588C46.2687 35.6116 46.7191 35.404 47.1372 35.1361C47.5681 34.8551 47.9469 34.5203 48.2735 34.132C48.6129 33.7304 48.8874 33.2886 49.0963 32.8066L53.0145 36.8433C52.5183 37.5663 51.9435 38.2156 51.2905 38.7911C50.6504 39.3669 49.9517 39.8556 49.1942 40.2573C48.4498 40.6589 47.6596 40.9603 46.8237 41.161C46.0009 41.3751 45.1519 41.4823 44.2767 41.4823C42.8009 41.4823 41.41 41.201 40.1038 40.6389C38.8108 40.0631 37.6745 39.28 36.6949 38.2891C35.7282 37.2984 34.9643 36.1402 34.4025 34.8148C33.8411 33.4893 33.5602 32.0704 33.5602 30.5574C33.5602 28.9106 33.8411 27.371 34.4025 25.9384C34.9643 24.5059 35.7282 23.2608 36.6949 22.2031C37.6745 21.132 38.8108 20.2885 40.1038 19.6727C41.41 19.0568 42.8009 18.7489 44.2767 18.7489C45.1519 18.7489 46.0073 18.8627 46.8432 19.0903C47.6922 19.3179 48.4955 19.6526 49.253 20.0944C50.0237 20.5228 50.7288 21.0517 51.3689 21.6809C52.0218 22.3102 52.5836 23.0332 53.0538 23.8498ZM61.0667 41.0807H55.679V11.0171H61.0667V29.975L69.0403 19.6124H75.1923L68.2373 28.5692L75.1923 41.0807H69.0403L64.7891 33.2686L61.0667 38.3294V41.0807ZM83.6166 13.7282C83.6166 14.237 83.5185 14.7123 83.3227 15.1541C83.1397 15.5959 82.8851 15.9842 82.5587 16.3189C82.2321 16.6402 81.8467 16.9013 81.4026 17.1021C80.9717 17.2895 80.5081 17.3833 80.0117 17.3833C79.5155 17.3833 79.0452 17.2895 78.6012 17.1021C78.17 16.9013 77.7913 16.6402 77.4649 16.3189C77.1514 15.9842 76.8968 15.5959 76.7007 15.1541C76.518 14.7123 76.4265 14.237 76.4265 13.7282C76.4265 13.2329 76.518 12.7643 76.7007 12.3225C76.8968 11.8673 77.1514 11.479 77.4649 11.1577C77.7913 10.823 78.17 10.5619 78.6012 10.3745C79.0452 10.1737 79.5155 10.0732 80.0117 10.0732C80.5081 10.0732 80.9717 10.1737 81.4026 10.3745C81.8467 10.5619 82.2321 10.823 82.5587 11.1577C82.8851 11.479 83.1397 11.8673 83.3227 12.3225C83.5185 12.7643 83.6166 13.2329 83.6166 13.7282ZM82.6957 41.0807H77.3082V19.5723H82.6957V41.0807ZM97.3111 41.0807C96.018 41.0807 94.8033 40.8331 93.667 40.3376C92.5307 39.829 91.5317 39.1394 90.6695 38.2691C89.8205 37.3854 89.1478 36.3612 88.6516 35.1965C88.1683 34.0317 87.9267 32.7866 87.9267 31.4611V25.0749H85.3211V19.6124H87.9267V11.0171H93.2556V19.6124H101.366V25.0749H93.2556V31.4611C93.2556 32.0369 93.36 32.579 93.5691 33.0879C93.778 33.5831 94.0653 34.0183 94.431 34.3931C94.7969 34.7682 95.2278 35.0692 95.724 35.2968C96.2205 35.5112 96.7493 35.6182 97.3111 35.6182H101.366V41.0807H97.3111ZM120.762 41.0807H103.267L112.103 25.0749H103.267V19.6124H120.762L111.926 35.6182H120.762V41.0807Z"
              fill="#1D4ED8"
            />
            <path
              d="M127.795 24.4221C127.79 24.4197 127.786 24.4183 127.782 24.4162L126.032 23.38C125.923 23.5072 125.774 23.5918 125.611 23.6193C125.448 23.6469 125.281 23.6157 125.138 23.531C124.995 23.4463 124.885 23.3133 124.826 23.1547C124.768 22.9961 124.765 22.8218 124.819 22.6613L123.057 21.618C123.009 21.5901 122.953 21.5826 122.9 21.597C122.848 21.6115 122.803 21.6469 122.775 21.6953L117.545 30.9828L117.544 30.9833C117.531 31.0072 117.522 31.0338 117.518 31.0612C117.515 31.0889 117.517 31.1166 117.524 31.1435C117.531 31.1703 117.543 31.1953 117.559 31.2175C117.576 31.2394 117.596 31.2578 117.62 31.2718L119.382 32.3137C119.491 32.1868 119.64 32.1023 119.803 32.0746C119.966 32.0472 120.133 32.0785 120.276 32.1629C120.419 32.2476 120.529 32.3803 120.587 32.5386C120.646 32.6968 120.649 32.8709 120.596 33.0313L122.336 34.0598C122.343 34.0653 122.35 34.071 122.357 34.0757C122.381 34.0897 122.407 34.0984 122.434 34.1023C122.46 34.1058 122.488 34.1039 122.514 34.0968C122.54 34.0897 122.564 34.0773 122.586 34.0603C122.607 34.0436 122.625 34.0225 122.639 33.9984V33.9986L127.87 24.7105C127.884 24.6865 127.892 24.66 127.896 24.6325C127.899 24.605 127.898 24.5771 127.89 24.5503C127.884 24.5235 127.871 24.4985 127.855 24.4764C127.839 24.4544 127.818 24.436 127.795 24.4221ZM126.295 25.1431L122.217 32.3834C122.203 32.4075 122.185 32.4286 122.164 32.4453C122.142 32.4623 122.118 32.4747 122.092 32.4818C122.066 32.4889 122.038 32.4908 122.012 32.4873C121.985 32.4837 121.959 32.4747 121.935 32.4607L119.195 30.8388C119.172 30.8248 119.151 30.8065 119.135 30.7845C119.118 30.7626 119.106 30.7374 119.099 30.7108C119.092 30.6839 119.09 30.6559 119.094 30.6285C119.098 30.6011 119.106 30.5745 119.12 30.5506L123.198 23.3103C123.225 23.2619 123.27 23.2265 123.323 23.212C123.375 23.1976 123.431 23.2051 123.479 23.2331L126.219 24.8551C126.243 24.8689 126.263 24.8873 126.28 24.9093C126.296 24.9313 126.308 24.9563 126.315 24.9831C126.322 25.0099 126.324 25.0377 126.321 25.0652C126.317 25.0927 126.308 25.1191 126.295 25.1431Z"
              fill="#1D4ED8"
            />
            <path
              d="M124.098 27.6533L123.23 27.4878L123.108 26.6371C123.106 26.6246 123.101 26.6129 123.092 26.6038C123.083 26.5946 123.072 26.5884 123.06 26.5861C123.048 26.5837 123.035 26.5852 123.024 26.5905C123.013 26.5957 123.003 26.6045 122.997 26.6154L122.576 27.3628L121.73 27.2015C121.718 27.1992 121.705 27.2008 121.694 27.2061C121.683 27.2114 121.673 27.2201 121.667 27.2311C121.661 27.242 121.658 27.2546 121.659 27.2672C121.66 27.2798 121.665 27.2918 121.673 27.3014L122.233 27.9724L121.812 28.7196C121.806 28.7308 121.803 28.7434 121.804 28.756C121.805 28.7689 121.81 28.781 121.818 28.7906C121.826 28.8002 121.837 28.8067 121.849 28.8098C121.862 28.8128 121.874 28.812 121.886 28.8073L122.665 28.4903L123.239 29.1783C123.247 29.1876 123.258 29.1945 123.27 29.1975C123.282 29.2005 123.294 29.1997 123.306 29.1953C123.317 29.1909 123.327 29.1829 123.334 29.1725C123.341 29.1621 123.344 29.1498 123.344 29.1372L123.329 28.2148L124.116 27.7667C124.127 27.7605 124.136 27.7511 124.141 27.7398C124.146 27.7284 124.148 27.7157 124.146 27.7032C124.144 27.6908 124.138 27.6794 124.13 27.6705C124.121 27.6615 124.11 27.6555 124.098 27.6533Z"
              fill="#1D4ED8"
            />
          </svg>
          <button type="button" onClick={showMenu} className="transition delay-150 duration-300 ease-in-out">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6Z"
                fill="black"
              />
              <path
                d="M4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18Z"
                fill="black"
              />
              <path
                d="M11 11C10.7348 11 10.4804 11.1054 10.2929 11.2929C10.1054 11.4804 10 11.7348 10 12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H11Z"
                fill="black"
              />
            </svg>
          </button>
        </nav>
        <ul 
          className={`${isShowMenu ? "hidden" : "flex"} flex-col items-center absolute top-16 right-0 z-10 w-full bg-white shadow-2xl transform`}
        >
          <li className="cursor-pointer hover:underline"><NavLink to={'/'}>Home</NavLink></li>
          <li className="cursor-pointer hover:underline"><NavLink to={'movie/all'}>Movie</NavLink></li>
          <li className="cursor-pointer hover:underline"><NavLink to={'movie/all'}>Buy Ticket</NavLink></li>
          <li className="cursor-pointer hover:underline"><NavLink to={'profile'}>Profil</NavLink></li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
