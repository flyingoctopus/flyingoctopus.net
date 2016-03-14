var React = require('react')

var Logo = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <div id="logo">
        <svg id="logo_path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.842 292.316" className="logo_path">
          <path fill="none" d="M109.14 70.05A6.738 6.738 0 0 1 118.486 68a7.157 7.157 0 0 1 3.217 5.065h15.732C105.61 52.06 51.23 16.44 51.23 16.44c-6.764-4.122-15.81-2.214-19.93 4.55-4.123 6.762-1.878 16.014 4.886 20.136l52.636 31.937h19.255a7.072 7.072 0 0 1 1.064-3.012zM49.077 31.616c-2.025 3.164-6.314 4.288-9.48 2.262-3.165-2.026-3.94-6.39-1.916-9.555a6.737 6.737 0 0 1 9.344-2.052 6.737 6.737 0 0 1 2.052 9.345zm24.92 24.274c-3.166-2.026-3.943-6.39-1.917-9.556a6.736 6.736 0 0 1 9.343-2.052c3.166 2.026 4.29 6.313 2.263 9.48-2.026 3.165-6.524 4.153-9.69 2.127zM235.806 87.32H27.908c-6.92 0-13.652 6.335-13.652 14.255s6.732 14.652 14.652 14.652h114.838v57.418H28.908c-7.92 0-14.652 6.336-14.652 14.256s6.732 14.256 15.652 14.256h207.898c10.88 0 20.78-9.504 20.78-21.383V109.1c0-11.88-9.9-21.78-22.78-21.78zM31.73 108.577c-3.757 0-6.764-3.258-6.764-7.016a6.737 6.737 0 0 1 6.765-6.765 6.737 6.737 0 0 1 6.766 6.765c0 3.758-3.006 7.016-6.765 7.016zm40.84 0c-3.758 0-6.764-3.258-6.764-7.016a6.736 6.736 0 0 1 6.764-6.765c3.76 0 7.016 3.007 7.016 6.765 0 3.758-3.256 7.016-7.016 7.016zm44 0c-3.758 0-6.764-3.258-6.764-7.016a6.736 6.736 0 0 1 6.764-6.765c3.76 0 7.016 3.007 7.016 6.765 0 3.758-3.256 7.016-7.016 7.016zM31.73 194.38c-3.757 0-6.764-3.258-6.764-7.016s3.007-6.766 6.765-6.766c3.76 0 6.766 3.008 6.766 6.766s-3.006 7.016-6.765 7.016zm40.84 0c-3.758 0-6.764-3.258-6.764-7.016s3.006-6.766 6.764-6.766c3.76 0 7.016 3.008 7.016 6.766s-3.256 7.016-7.016 7.016zm44 0c-3.758 0-6.764-3.258-6.764-7.016s3.006-6.766 6.764-6.766c3.76 0 7.016 3.008 7.016 6.766s-3.256 7.016-7.016 7.016zm51.422-60.136c-5.94 0-10.69-5.148-10.69-11.088 0-5.94 4.75-10.69 10.69-10.69 5.94 0 10.69 4.75 10.69 10.69.002 5.94-4.75 11.088-10.69 11.088zm32.472 42.768c-23.467 0-21.78-21.384-21.78-21.384h43.164s2.083 21.384-21.384 21.384zm32.075-42.768c-5.94 0-10.692-5.148-10.692-11.088 0-5.94 4.752-10.69 10.69-10.69 5.94 0 11.09 4.75 11.09 10.69 0 5.94-5.15 11.088-11.09 11.088zM118.73 222.544c-3.166 2.025-7.455.9-9.48-2.263a6.755 6.755 0 0 1-1.07-3.867H90.52L35.83 251.157c-6.978 3.744-9.915 12.51-6.17 19.488 3.743 6.98 12.67 9.38 19.65 5.636-.002 0 55.733-38.32 87.86-59.867h-15.425c.14 2.384-.9 4.778-3.015 6.13zm-71.46 45.728c-3.167 2.025-7.666 1.036-9.69-2.13-2.027-3.164-.904-7.452 2.262-9.478a6.737 6.737 0 0 1 9.344 2.053c2.026 3.165 1.25 7.53-1.917 9.555zm37.06-23.716c-3.166 2.025-7.664 1.038-9.69-2.127-2.026-3.167-.903-7.454 2.263-9.48A6.737 6.737 0 0 1 86.247 235c2.026 3.165 1.25 7.528-1.916 9.554z"/>
          <path d="M27.908 73.063C13.068 73.063 0 85.735 0 101.575s13.068 28.908 28.908 28.908h100.187v28.512H28.908C13.068 158.995 0 172.06 0 187.9c0 15.84 13.068 28.513 28.908 28.513h38.14l-38.144 21.833c-13.958 7.488-19.296 25.18-11.808 39.14 7.488 13.958 24.993 18.947 38.952 11.458l102.052-72.43h78.706c19.8 0 36.036-15.84 36.036-35.64v-71.676c0-19.8-16.236-36.036-37.036-36.036H159.28C150.917 67.347 58.645 4.266 58.645 4.266 45.12-3.976 27.368.044 19.126 13.57c-8.243 13.527-3.885 31.486 9.642 39.73l34.864 19.62M36.186 41.124c-6.764-4.122-9.01-13.374-4.887-20.137 4.12-6.763 13.166-8.67 19.93-4.55 0 0 54.38 35.62 86.204 56.624h-15.732a7.157 7.157 0 0 0-3.217-5.065 6.737 6.737 0 0 0-9.344 2.053 7.086 7.086 0 0 0-1.063 3.012H88.82L36.187 41.125zM49.31 276.28c-6.98 3.746-15.906 1.345-19.65-5.635-3.744-6.98-.808-15.744 6.17-19.488l54.693-34.744h17.656a6.762 6.762 0 0 0 1.07 3.868c2.025 3.165 6.314 4.29 9.48 2.264 2.113-1.353 3.154-3.747 3.016-6.13h15.426C105.044 237.96 49.31 276.28 49.31 276.28zm209.276-95.506c0 11.88-9.9 21.383-20.78 21.383H29.908c-8.92 0-15.652-6.336-15.652-14.256s6.732-14.255 14.652-14.255h114.838V116.226H28.908c-7.92 0-14.652-6.732-14.652-14.652s6.732-14.256 13.652-14.256h207.898c12.88 0 22.78 9.9 22.78 21.78v71.676z"/>
          <path d="M72.57 180.598c-3.758 0-6.764 3.008-6.764 6.766s3.006 7.016 6.764 7.016c3.76 0 7.016-3.258 7.016-7.016s-3.256-6.766-7.016-6.766zM116.57 180.598c-3.758 0-6.764 3.008-6.764 6.766s3.006 7.016 6.764 7.016c3.76 0 7.016-3.258 7.016-7.016s-3.256-6.766-7.016-6.766zM167.992 112.465c-5.94 0-10.69 4.752-10.69 10.69 0 5.94 4.75 11.09 10.69 11.09 5.94 0 10.69-5.15 10.69-11.09.002-5.938-4.75-10.69-10.69-10.69zM31.73 180.598c-3.757 0-6.764 3.008-6.764 6.766s3.007 7.016 6.765 7.016c3.76 0 6.766-3.258 6.766-7.016s-3.006-6.766-6.765-6.766zM178.684 155.628s-1.686 21.384 21.78 21.384 21.384-21.384 21.384-21.384h-43.164zM232.54 112.465c-5.94 0-10.692 4.752-10.692 10.69 0 5.94 4.752 11.09 10.69 11.09 5.94 0 11.09-5.15 11.09-11.09 0-5.938-5.15-10.69-11.09-10.69zM47.023 22.27a6.738 6.738 0 0 0-9.344 2.052c-2.026 3.165-1.25 7.53 1.915 9.555 3.166 2.025 7.455.902 9.48-2.262a6.736 6.736 0 0 0-2.052-9.345zM39.842 256.665c-3.166 2.025-4.29 6.313-2.263 9.48 2.024 3.164 6.523 4.153 9.69 2.128 3.165-2.026 3.94-6.39 1.915-9.555a6.736 6.736 0 0 0-9.343-2.053zM81.423 44.282a6.736 6.736 0 0 0-9.344 2.052c-2.027 3.166-1.25 7.53 1.915 9.555 3.167 2.025 7.665 1.037 9.69-2.128 2.027-3.166.904-7.454-2.262-9.48zM76.903 232.948c-3.166 2.027-4.29 6.314-2.263 9.48 2.025 3.165 6.524 4.152 9.69 2.127 3.166-2.025 3.943-6.39 1.917-9.555a6.737 6.737 0 0 0-9.344-2.052zM72.57 94.798a6.736 6.736 0 0 0-6.764 6.765c0 3.758 3.006 7.016 6.764 7.016 3.76 0 7.016-3.26 7.016-7.017 0-3.758-3.256-6.765-7.016-6.765zM116.57 94.798a6.736 6.736 0 0 0-6.764 6.765c0 3.758 3.006 7.016 6.764 7.016 3.76 0 7.016-3.26 7.016-7.017 0-3.758-3.256-6.765-7.016-6.765zM31.73 94.798a6.737 6.737 0 0 0-6.764 6.765c0 3.758 3.007 7.016 6.765 7.016 3.76 0 6.766-3.26 6.766-7.017a6.737 6.737 0 0 0-6.765-6.765z"/>
        </svg>
      </div>
    )
  }
})

module.exports = Logo

