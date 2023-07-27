import React from "react";

function Header() {
	return (
		<header>
			<div id="moodring-logo">
				<svg
					width="222"
					height="156"
					viewBox="0 0 222 156"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="m-svg"
						className="logo-svg"
						d="M0.454546 1.18182H10.5455L34.2727 59.1364H35.0909L58.8182 1.18182H68.9091V71H61V17.9545H60.3182L38.5 71H30.8636L9.04546 17.9545H8.36364V71H0.454546V1.18182Z"
					/>
					<path d="M0.454546 1.18182V0.181816H-0.545454V1.18182H0.454546ZM10.5455 1.18182L11.4709 0.802929L11.2166 0.181816H10.5455V1.18182ZM34.2727 59.1364L33.3473 59.5153L33.6016 60.1364H34.2727V59.1364ZM35.0909 59.1364V60.1364H35.7621L36.0164 59.5153L35.0909 59.1364ZM58.8182 1.18182V0.181816H58.147L57.8927 0.802929L58.8182 1.18182ZM68.9091 1.18182H69.9091V0.181816H68.9091V1.18182ZM68.9091 71V72H69.9091V71H68.9091ZM61 71H60V72H61V71ZM61 17.9545H62V16.9545H61V17.9545ZM60.3182 17.9545V16.9545H59.6482L59.3934 17.5742L60.3182 17.9545ZM38.5 71V72H39.17L39.4248 71.3804L38.5 71ZM30.8636 71L29.9388 71.3804L30.1937 72H30.8636V71ZM9.04546 17.9545L9.97028 17.5742L9.71543 16.9545H9.04546V17.9545ZM8.36364 17.9545V16.9545H7.36364V17.9545H8.36364ZM8.36364 71V72H9.36364V71H8.36364ZM0.454546 71H-0.545454V72H0.454546V71ZM0.454546 2.18182H10.5455V0.181816H0.454546V2.18182ZM9.62001 1.5607L33.3473 59.5153L35.1982 58.7575L11.4709 0.802929L9.62001 1.5607ZM34.2727 60.1364H35.0909V58.1364H34.2727V60.1364ZM36.0164 59.5153L59.7436 1.5607L57.8927 0.802929L34.1655 58.7575L36.0164 59.5153ZM58.8182 2.18182H68.9091V0.181816H58.8182V2.18182ZM67.9091 1.18182V71H69.9091V1.18182H67.9091ZM68.9091 70H61V72H68.9091V70ZM62 71V17.9545H60V71H62ZM61 16.9545H60.3182V18.9545H61V16.9545ZM59.3934 17.5742L37.5752 70.6196L39.4248 71.3804L61.243 18.3349L59.3934 17.5742ZM38.5 70H30.8636V72H38.5V70ZM31.7885 70.6196L9.97028 17.5742L8.12063 18.3349L29.9388 71.3804L31.7885 70.6196ZM9.04546 16.9545H8.36364V18.9545H9.04546V16.9545ZM7.36364 17.9545V71H9.36364V17.9545H7.36364ZM8.36364 70H0.454546V72H8.36364V70ZM1.45455 71V1.18182H-0.545454V71H1.45455Z" />
					<path
						id="outter-o-svg"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M155 37C155 57.4345 138.435 74 118 74C97.5655 74 81 57.4345 81 37C81 16.5655 97.5655 0 118 0C138.435 0 155 16.5655 155 37ZM118 64.75C133.326 64.75 145.75 52.3259 145.75 37C145.75 21.6741 133.326 9.25 118 9.25C102.674 9.25 90.25 21.6741 90.25 37C90.25 52.3259 102.674 64.75 118 64.75Z"
					/>
					<path
						d="M154.5 37C154.5 57.1584 138.158 73.5 118 73.5C97.8416 73.5 81.5 57.1584 81.5 37C81.5 16.8416 97.8416 0.5 118 0.5C138.158 0.5 154.5 16.8416 154.5 37ZM118 65.25C133.602 65.25 146.25 52.602 146.25 37C146.25 21.398 133.602 8.75 118 8.75C102.398 8.75 89.75 21.398 89.75 37C89.75 52.602 102.398 65.25 118 65.25Z"
						stroke="black"
					/>
					<path
						id="inner-o-svg"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M118.5 57C129.822 57 139 47.8218 139 36.5C139 25.1782 129.822 16 118.5 16C107.178 16 98 25.1782 98 36.5C98 47.8218 107.178 57 118.5 57ZM119 49C125.627 49 131 43.6274 131 37C131 30.3726 125.627 25 119 25C112.373 25 107 30.3726 107 37C107 43.6274 112.373 49 119 49Z"
						fill="green"
					/>
					<path
						d="M138.5 36.5C138.5 47.5457 129.546 56.5 118.5 56.5C107.454 56.5 98.5 47.5457 98.5 36.5C98.5 25.4543 107.454 16.5 118.5 16.5C129.546 16.5 138.5 25.4543 138.5 36.5ZM119 49.5C125.904 49.5 131.5 43.9036 131.5 37C131.5 30.0964 125.904 24.5 119 24.5C112.096 24.5 106.5 30.0964 106.5 37C106.5 43.9036 112.096 49.5 119 49.5Z"
						stroke="black"
					/>
					<path
						id="d-svg"
						className="logo-svg"
						d="M188 71H166.455V1.18182H188.955C195.727 1.18182 201.523 2.57954 206.341 5.375C211.159 8.14772 214.852 12.1364 217.42 17.3409C219.989 22.5227 221.273 28.7273 221.273 35.9545C221.273 43.2273 219.977 49.4886 217.386 54.7386C214.795 59.9659 211.023 63.9886 206.068 66.8068C201.114 69.6023 195.091 71 188 71ZM174.909 63.5H187.455C193.227 63.5 198.011 62.3864 201.807 60.1591C205.602 57.9318 208.432 54.7614 210.295 50.6477C212.159 46.5341 213.091 41.6364 213.091 35.9545C213.091 30.3182 212.17 25.4659 210.33 21.3977C208.489 17.3068 205.739 14.1705 202.08 11.9886C198.42 9.78409 193.864 8.68182 188.409 8.68182H174.909V63.5Z"
					/>
					<path
						d="M166.455 71H165.455V72H166.455V71ZM166.455 1.18182V0.181816H165.455V1.18182H166.455ZM206.341 5.375L205.839 6.23997L205.842 6.24173L206.341 5.375ZM217.42 17.3409L216.524 17.7834L216.524 17.785L217.42 17.3409ZM217.386 54.7386L218.282 55.1827L218.283 55.1812L217.386 54.7386ZM206.068 66.8068L206.56 67.6778L206.563 67.676L206.068 66.8068ZM174.909 63.5H173.909V64.5H174.909V63.5ZM210.33 21.3977L209.418 21.8081L209.418 21.81L210.33 21.3977ZM202.08 11.9886L201.563 12.8452L201.567 12.8475L202.08 11.9886ZM174.909 8.68182V7.68182H173.909V8.68182H174.909ZM188 70H166.455V72H188V70ZM167.455 71V1.18182H165.455V71H167.455ZM166.455 2.18182H188.955V0.181816H166.455V2.18182ZM188.955 2.18182C195.589 2.18182 201.203 3.55023 205.839 6.23996L206.843 4.51004C201.842 1.60886 195.866 0.181816 188.955 0.181816V2.18182ZM205.842 6.24173C210.481 8.91111 214.039 12.7483 216.524 17.7834L218.317 16.8984C215.665 11.5244 211.837 7.38434 206.84 4.50827L205.842 6.24173ZM216.524 17.785C219.009 22.7986 220.273 28.8438 220.273 35.9545H222.273C222.273 28.6108 220.968 22.2468 218.316 16.8968L216.524 17.785ZM220.273 35.9545C220.273 43.1101 218.998 49.213 216.49 54.2961L218.283 55.1812C220.956 49.7643 222.273 43.3444 222.273 35.9545H220.273ZM216.49 54.2945C213.986 59.3477 210.351 63.2204 205.574 65.9376L206.563 67.676C211.695 64.7569 215.605 60.5841 218.282 55.1827L216.49 54.2945ZM205.577 65.9359C200.805 68.6283 194.961 70 188 70V72C195.221 72 201.422 70.5763 206.56 67.6778L205.577 65.9359ZM174.909 64.5H187.455V62.5H174.909V64.5ZM187.455 64.5C193.351 64.5 198.323 63.3628 202.313 61.0216L201.301 59.2966C197.699 61.41 193.103 62.5 187.455 62.5V64.5ZM202.313 61.0216C206.291 58.6869 209.26 55.3569 211.206 51.0604L209.385 50.2351C207.604 54.1658 204.913 57.1768 201.301 59.2966L202.313 61.0216ZM211.206 51.0604C213.142 46.7882 214.091 41.7431 214.091 35.9545H212.091C212.091 41.5296 211.176 46.28 209.385 50.2351L211.206 51.0604ZM214.091 35.9545C214.091 30.2121 213.153 25.2124 211.241 20.9855L209.418 21.81C211.188 25.7194 212.091 30.4243 212.091 35.9545H214.091ZM211.241 20.9874C209.321 16.72 206.437 13.4223 202.592 11.1297L201.567 12.8475C205.041 14.9186 207.656 17.8936 209.418 21.8081L211.241 20.9874ZM202.596 11.1321C198.743 8.81103 193.996 7.68182 188.409 7.68182V9.68182C193.731 9.68182 198.098 10.7572 201.563 12.8452L202.596 11.1321ZM188.409 7.68182H174.909V9.68182H188.409V7.68182ZM173.909 8.68182V63.5H175.909V8.68182H173.909Z"
						fill="black"
					/>
					<path
						id="ring-svg"
						className="logo-svg"
						d="M0.454546 155V85.1818H24.0455C29.5 85.1818 33.9773 86.1136 37.4773 87.9773C40.9773 89.8182 43.5682 92.3523 45.25 95.5795C46.9318 98.8068 47.7727 102.477 47.7727 106.591C47.7727 110.705 46.9318 114.352 45.25 117.534C43.5682 120.716 40.9886 123.216 37.5114 125.034C34.0341 126.83 29.5909 127.727 24.1818 127.727H5.09091V120.091H23.9091C27.6364 120.091 30.6364 119.545 32.9091 118.455C35.2045 117.364 36.8636 115.818 37.8864 113.818C38.9318 111.795 39.4545 109.386 39.4545 106.591C39.4545 103.795 38.9318 101.352 37.8864 99.2614C36.8409 97.1705 35.1705 95.5568 32.875 94.4205C30.5795 93.2614 27.5455 92.6818 23.7727 92.6818H8.90909V155H0.454546ZM33.3182 123.636L50.5 155H40.6818L23.7727 123.636H33.3182ZM70.3153 85.1818V155H61.8608V85.1818H70.3153ZM142.631 85.1818V155H134.449L96.4034 100.182H95.7216V155H87.267V85.1818H95.4489L133.631 140.136H134.312V85.1818H142.631ZM207.276 107C206.526 104.705 205.537 102.648 204.31 100.83C203.105 98.9886 201.662 97.4205 199.98 96.125C198.321 94.8295 196.435 93.8409 194.321 93.1591C192.207 92.4773 189.889 92.1364 187.366 92.1364C183.23 92.1364 179.469 93.2045 176.082 95.3409C172.696 97.4773 170.003 100.625 168.003 104.784C166.003 108.943 165.003 114.045 165.003 120.091C165.003 126.136 166.014 131.239 168.037 135.398C170.06 139.557 172.798 142.705 176.253 144.841C179.707 146.977 183.594 148.045 187.912 148.045C191.912 148.045 195.435 147.193 198.48 145.489C201.548 143.761 203.935 141.33 205.639 138.193C207.366 135.034 208.23 131.318 208.23 127.045L210.821 127.591H189.821V120.091H216.412V127.591C216.412 133.341 215.185 138.341 212.73 142.591C210.298 146.841 206.935 150.136 202.639 152.477C198.366 154.795 193.457 155.955 187.912 155.955C181.73 155.955 176.298 154.5 171.616 151.591C166.957 148.682 163.321 144.545 160.707 139.182C158.116 133.818 156.821 127.455 156.821 120.091C156.821 114.568 157.56 109.602 159.037 105.193C160.537 100.761 162.651 96.9886 165.378 93.875C168.105 90.7614 171.332 88.375 175.06 86.7159C178.787 85.0568 182.889 84.2273 187.366 84.2273C191.048 84.2273 194.48 84.7841 197.662 85.8977C200.866 86.9886 203.719 88.5455 206.219 90.5682C208.741 92.5682 210.844 94.9659 212.526 97.7614C214.207 100.534 215.366 103.614 216.003 107H207.276Z"
					/>
					{/* <path
						d="M0.454546 155H-0.545454V156H0.454546V155ZM0.454546 85.1818V84.1818H-0.545454V85.1818H0.454546ZM37.4773 87.9773L37.0073 88.86L37.0118 88.8623L37.4773 87.9773ZM45.25 95.5795L44.3632 96.0417L44.3632 96.0417L45.25 95.5795ZM45.25 117.534L44.3659 117.067L44.3659 117.067L45.25 117.534ZM37.5114 125.034L37.9702 125.923L37.9747 125.92L37.5114 125.034ZM5.09091 127.727H4.09091V128.727H5.09091V127.727ZM5.09091 120.091V119.091H4.09091V120.091H5.09091ZM32.9091 118.455L32.4798 117.551L32.4764 117.553L32.9091 118.455ZM37.8864 113.818L36.998 113.359L36.996 113.363L37.8864 113.818ZM32.875 94.4205L32.4242 95.3131L32.4313 95.3166L32.875 94.4205ZM8.90909 92.6818V91.6818H7.90909V92.6818H8.90909ZM8.90909 155V156H9.90909V155H8.90909ZM33.3182 123.636L34.1952 123.156L33.9106 122.636H33.3182V123.636ZM50.5 155V156H52.1881L51.377 154.52L50.5 155ZM40.6818 155L39.8016 155.475L40.0849 156H40.6818V155ZM23.7727 123.636V122.636H22.0975L22.8925 124.111L23.7727 123.636ZM1.45455 155V85.1818H-0.545454V155H1.45455ZM0.454546 86.1818H24.0455V84.1818H0.454546V86.1818ZM24.0455 86.1818C29.3946 86.1818 33.696 87.0968 37.0073 88.8599L37.9473 87.0946C34.2585 85.1305 29.6054 84.1818 24.0455 84.1818V86.1818ZM37.0118 88.8623C40.3479 90.6171 42.7837 93.0107 44.3632 96.0417L46.1368 95.1174C44.3527 91.6938 41.6066 89.0193 37.9428 87.0922L37.0118 88.8623ZM44.3632 96.0417C45.9614 99.1086 46.7727 102.617 46.7727 106.591H48.7727C48.7727 102.338 47.9022 98.5051 46.1368 95.1174L44.3632 96.0417ZM46.7727 106.591C46.7727 110.565 45.9613 114.048 44.3659 117.067L46.1341 118.001C47.9023 114.656 48.7727 110.844 48.7727 106.591H46.7727ZM44.3659 117.067C42.7873 120.053 40.3628 122.415 37.048 124.148L37.9747 125.92C41.6144 124.017 44.3491 121.378 46.1341 118.001L44.3659 117.067ZM37.0526 124.146C33.7608 125.845 29.489 126.727 24.1818 126.727V128.727C29.6928 128.727 34.3074 127.814 37.9702 125.923L37.0526 124.146ZM24.1818 126.727H5.09091V128.727H24.1818V126.727ZM6.09091 127.727V120.091H4.09091V127.727H6.09091ZM5.09091 121.091H23.9091V119.091H5.09091V121.091ZM23.9091 121.091C27.7204 121.091 30.8852 120.535 33.3418 119.356L32.4764 117.553C30.3876 118.556 27.5524 119.091 23.9091 119.091V121.091ZM33.3383 119.358C35.8052 118.185 37.6408 116.495 38.7767 114.273L36.996 113.363C36.0865 115.141 34.6039 116.542 32.4799 117.551L33.3383 119.358ZM38.7747 114.277C39.9084 112.084 40.4545 109.51 40.4545 106.591H38.4545C38.4545 109.262 37.9552 111.507 36.998 113.359L38.7747 114.277ZM40.4545 106.591C40.4545 103.67 39.908 101.069 38.7808 98.8141L36.9919 99.7086C37.9556 101.636 38.4545 103.921 38.4545 106.591H40.4545ZM38.7808 98.8141C37.6286 96.5097 35.7895 94.7474 33.3187 93.5243L32.4313 95.3166C34.5514 96.3662 36.0533 97.8312 36.9919 99.7086L38.7808 98.8141ZM33.3257 93.5278C30.8406 92.2729 27.6345 91.6818 23.7727 91.6818V93.6818C27.4565 93.6818 30.3185 94.2498 32.4243 95.3131L33.3257 93.5278ZM23.7727 91.6818H8.90909V93.6818H23.7727V91.6818ZM7.90909 92.6818V155H9.90909V92.6818H7.90909ZM8.90909 154H0.454546V156H8.90909V154ZM32.4412 124.117L49.623 155.48L51.377 154.52L34.1952 123.156L32.4412 124.117ZM50.5 154H40.6818V156H50.5V154ZM41.562 154.525L24.653 123.162L22.8925 124.111L39.8016 155.475L41.562 154.525ZM23.7727 124.636H33.3182V122.636H23.7727V124.636ZM70.3153 85.1818H71.3153V84.1818H70.3153V85.1818ZM70.3153 155V156H71.3153V155H70.3153ZM61.8608 155H60.8608V156H61.8608V155ZM61.8608 85.1818V84.1818H60.8608V85.1818H61.8608ZM69.3153 85.1818V155H71.3153V85.1818H69.3153ZM70.3153 154H61.8608V156H70.3153V154ZM62.8608 155V85.1818H60.8608V155H62.8608ZM61.8608 86.1818H70.3153V84.1818H61.8608V86.1818ZM142.631 85.1818H143.631V84.1818H142.631V85.1818ZM142.631 155V156H143.631V155H142.631ZM134.449 155L133.627 155.57L133.926 156H134.449V155ZM96.4034 100.182L97.2249 99.6117L96.9266 99.1818H96.4034V100.182ZM95.7216 100.182V99.1818H94.7216V100.182H95.7216ZM95.7216 155V156H96.7216V155H95.7216ZM87.267 155H86.267V156H87.267V155ZM87.267 85.1818V84.1818H86.267V85.1818H87.267ZM95.4489 85.1818L96.2701 84.6112L95.9717 84.1818H95.4489V85.1818ZM133.631 140.136L132.809 140.707L133.108 141.136H133.631V140.136ZM134.312 140.136V141.136H135.312V140.136H134.312ZM134.312 85.1818V84.1818H133.312V85.1818H134.312ZM141.631 85.1818V155H143.631V85.1818H141.631ZM142.631 154H134.449V156H142.631V154ZM135.27 154.43L97.2249 99.6117L95.5819 100.752L133.627 155.57L135.27 154.43ZM96.4034 99.1818H95.7216V101.182H96.4034V99.1818ZM94.7216 100.182V155H96.7216V100.182H94.7216ZM95.7216 154H87.267V156H95.7216V154ZM88.267 155V85.1818H86.267V155H88.267ZM87.267 86.1818H95.4489V84.1818H87.267V86.1818ZM94.6276 85.7524L132.809 140.707L134.452 139.566L96.2701 84.6112L94.6276 85.7524ZM133.631 141.136H134.312V139.136H133.631V141.136ZM135.312 140.136V85.1818H133.312V140.136H135.312ZM134.312 86.1818H142.631V84.1818H134.312V86.1818ZM207.276 107L206.325 107.311L206.55 108H207.276V107ZM204.31 100.83L203.473 101.377L203.477 101.383L203.481 101.389L204.31 100.83ZM199.98 96.125L199.365 96.9132L199.37 96.9172L199.98 96.125ZM194.321 93.1591L194.628 92.2074L194.628 92.2074L194.321 93.1591ZM168.003 104.784L168.904 105.217L168.904 105.217L168.003 104.784ZM168.037 135.398L167.138 135.835L167.138 135.835L168.037 135.398ZM198.48 145.489L198.969 146.361L198.971 146.36L198.48 145.489ZM205.639 138.193L204.762 137.713L204.761 137.716L205.639 138.193ZM208.23 127.045L208.436 126.067L207.23 125.813V127.045H208.23ZM210.821 127.591V128.591L211.027 126.612L210.821 127.591ZM189.821 127.591H188.821V128.591H189.821V127.591ZM189.821 120.091V119.091H188.821V120.091H189.821ZM216.412 120.091H217.412V119.091H216.412V120.091ZM212.73 142.591L211.864 142.091L211.862 142.094L212.73 142.591ZM202.639 152.477L203.116 153.356L203.118 153.355L202.639 152.477ZM171.616 151.591L171.087 152.439L171.089 152.44L171.616 151.591ZM160.707 139.182L159.807 139.617L159.808 139.62L160.707 139.182ZM159.037 105.193L158.09 104.873L158.089 104.875L159.037 105.193ZM165.378 93.875L166.13 94.5339L166.13 94.5339L165.378 93.875ZM197.662 85.8977L197.332 86.8416L197.34 86.8444L197.662 85.8977ZM206.219 90.5682L205.59 91.3456L205.598 91.3518L206.219 90.5682ZM212.526 97.7614L211.669 98.2769L211.671 98.28L212.526 97.7614ZM216.003 107V108H217.208L216.986 106.815L216.003 107ZM208.226 106.689C207.45 104.315 206.423 102.172 205.139 100.27L203.481 101.389C204.651 103.123 205.601 105.095 206.325 107.311L208.226 106.689ZM205.146 100.282C203.883 98.3509 202.364 96.699 200.59 95.3328L199.37 96.9172C200.96 98.1419 202.327 99.6264 203.473 101.377L205.146 100.282ZM200.596 95.3368C198.839 93.9653 196.847 92.9232 194.628 92.2074L194.014 94.1108C196.022 94.7586 197.803 95.6938 199.365 96.9132L200.596 95.3368ZM194.628 92.2074C192.403 91.4895 189.979 91.1364 187.366 91.1364V93.1364C189.799 93.1364 192.012 93.465 194.014 94.1108L194.628 92.2074ZM187.366 91.1364C183.048 91.1364 179.1 92.2546 175.549 94.4951L176.616 96.1867C179.837 94.1545 183.412 93.1364 187.366 93.1364V91.1364ZM175.549 94.4951C171.981 96.7463 169.17 100.049 167.102 104.351L168.904 105.217C170.835 101.201 173.411 98.2083 176.616 96.1867L175.549 94.4951ZM167.102 104.351C165.02 108.68 164.003 113.94 164.003 120.091H166.003C166.003 114.151 166.986 109.206 168.904 105.217L167.102 104.351ZM164.003 120.091C164.003 126.243 165.032 131.505 167.138 135.835L168.936 134.96C166.997 130.973 166.003 126.03 166.003 120.091H164.003ZM167.138 135.835C169.231 140.14 172.09 143.442 175.727 145.691L176.779 143.99C173.507 141.967 170.888 138.973 168.936 134.96L167.138 135.835ZM175.727 145.691C179.35 147.932 183.42 149.045 187.912 149.045V147.045C183.767 147.045 180.065 146.023 176.779 143.99L175.727 145.691ZM187.912 149.045C192.058 149.045 195.753 148.161 198.969 146.361L197.992 144.616C195.116 146.225 191.766 147.045 187.912 147.045V149.045ZM198.971 146.36C202.205 144.539 204.725 141.97 206.518 138.671L204.761 137.716C203.144 140.689 200.892 142.984 197.99 144.617L198.971 146.36ZM206.517 138.673C208.338 135.342 209.23 131.455 209.23 127.045H207.23C207.23 131.182 206.395 134.727 204.762 137.713L206.517 138.673ZM208.024 128.024L210.615 128.569L211.027 126.612L208.436 126.067L208.024 128.024ZM210.821 126.591H189.821V128.591H210.821V126.591ZM190.821 127.591V120.091H188.821V127.591H190.821ZM189.821 121.091H216.412V119.091H189.821V121.091ZM215.412 120.091V127.591H217.412V120.091H215.412ZM215.412 127.591C215.412 133.196 214.217 138.017 211.864 142.091L213.596 143.091C216.152 138.665 217.412 133.486 217.412 127.591H215.412ZM211.862 142.094C209.522 146.184 206.293 149.347 202.161 151.599L203.118 153.355C207.576 150.926 211.074 147.498 213.598 143.088L211.862 142.094ZM202.162 151.598C198.056 153.826 193.315 154.955 187.912 154.955V156.955C193.6 156.955 198.677 155.764 203.116 153.356L202.162 151.598ZM187.912 154.955C181.893 154.955 176.649 153.541 172.144 150.742L171.089 152.44C175.948 155.459 181.567 156.955 187.912 156.955V154.955ZM172.146 150.743C167.66 147.942 164.145 143.954 161.606 138.744L159.808 139.62C162.497 145.137 166.255 149.422 171.087 152.439L172.146 150.743ZM161.608 138.747C159.096 133.547 157.821 127.339 157.821 120.091H155.821C155.821 127.57 157.137 134.089 159.807 139.617L161.608 138.747ZM157.821 120.091C157.821 114.656 158.548 109.8 159.985 105.511L158.089 104.875C156.571 109.404 155.821 114.48 155.821 120.091H157.821ZM159.984 105.514C161.447 101.19 163.5 97.5366 166.13 94.5339L164.626 93.2161C161.801 96.4407 159.626 100.332 158.09 104.873L159.984 105.514ZM166.13 94.5339C168.763 91.5275 171.873 89.2288 175.466 87.6295L174.653 85.8023C170.791 87.5212 167.447 89.9952 164.626 93.2161L166.13 94.5339ZM175.466 87.6295C179.054 86.0327 183.016 85.2273 187.366 85.2273V83.2273C182.763 83.2273 178.52 84.0809 174.653 85.8023L175.466 87.6295ZM187.366 85.2273C190.946 85.2273 194.265 85.7684 197.332 86.8416L197.992 84.9539C194.695 83.7998 191.15 83.2273 187.366 83.2273V85.2273ZM197.34 86.8444C200.439 87.8994 203.186 89.4007 205.59 91.3456L206.848 89.7908C204.252 87.6902 201.294 86.0779 197.984 84.9511L197.34 86.8444ZM205.598 91.3518C208.025 93.2763 210.048 95.5828 211.669 98.2769L213.382 97.2458C211.64 94.349 209.458 91.8601 206.84 89.7846L205.598 91.3518ZM211.671 98.28C213.286 100.944 214.404 103.909 215.02 107.185L216.986 106.815C216.328 103.318 215.129 100.124 213.381 97.2428L211.671 98.28ZM216.003 106H207.276V108H216.003V106Z"
						fill="black"
					/> */}
				</svg>
			</div>
			<h1>
				Connect your Oura Ring
				<br />
				Learn What Habits Work
			</h1>
		</header>
	);
}

export default Header;
