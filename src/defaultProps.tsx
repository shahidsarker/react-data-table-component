import React from 'react';
import FirstPageIcon from './icons/FirstPage';
import LastPageIcon from './icons/LastPage';
import LeftIcon from './icons/Left';
import RightIcon from './icons/Right';
import ExpanderCollapsedIcon from './icons/ExpanderCollapsedIcon';
import ExpanderExpandedIcon from './icons/ExpanderExpandedIcon';
import { noop } from './util';
import { Alignment, Direction } from './constants';
import { Themes } from 'types';

export const defaultProps = {
	options: {
		keyField: 'id',
		selectableRows: false,
		selectableRowsHighlight: false,
		selectableRowsNoSelectAll: false,
		selectableRowSelected: null,
		selectableRowDisabled: null,
		selectableRowsComponent: 'input' as const,
		selectableRowsComponentProps: {},
		selectableRowsVisibleOnly: false,
		expandableRows: false,
		expandableRowDisabled: null,
		expandableRowExpanded: null,
		expandOnRowClicked: false,
		expandableRowsHideExpander: false,
		expandOnRowDoubleClicked: false,
		expandableInheritConditionalStyles: false,
		progressComponent: <div style={{ fontSize: '24px', fontWeight: 700, padding: '24px' }}>Loading...</div>,
		persistTableHead: false,
		expandableRowsComponent: (
			<div style={{ padding: '24px' }}>Add a custom expander component. Use props.data for row data</div>
		),
		expandableIcon: {
			collapsed: <ExpanderCollapsedIcon />,
			expanded: <ExpanderExpandedIcon />,
		},
		sortIcon: null,
		sortFunction: null,
		sortServer: false,
		striped: false,
		highlightOnHover: false,
		pointerOnHover: false,
		noContextMenu: false,
		contextComponent: null,
		defaultSortFieldId: null,
		defaultSortAsc: true,
		responsive: true,
		noDataComponent: <div style={{ padding: '24px' }}>There are no records to display</div>,
		noTableHead: false,
		noHeader: false,
		subHeader: false,
		subHeaderAlign: Alignment.Right,
		subHeaderWrap: true,
		subHeaderComponent: null,
		fixedHeader: false,
		fixedHeaderScrollHeight: '100vh',
		pagination: false,
		paginationOptions: {
			defaultPage: 1,
			perPage: 10,
			rowsPerPageOptions: [10, 15, 20, 25, 30],
			component: null,
			noRowsPerPage: false,
			selectAllRowsItem: false,
			iconFirstPage: <FirstPageIcon />,
			iconLastPage: <LastPageIcon />,
			iconNext: <RightIcon />,
			iconPrevious: <LeftIcon />,
		},
		paginationServer: false,
		paginationServerOptions: {
			persistSelectedOnSort: false,
			persistSelectedOnPageChange: false,
			totalRows: 0,
		},

		dense: false,
		conditionalRowStyles: [],
		theme: 'default' as Themes,
		customStyles: {},
		direction: Direction.AUTO,
	},
	columns: [],
	data: [],
	title: '',
	progressPending: false,
	disabled: false,
	actions: null,
	contextActions: null,
	clearSelectedRows: false,
	paginationResetDefaultPage: false,
	localization: {
		pagination: {
			rowsPerPageText: 'Rows per page:',
			rangeSeparatorText: 'of',
		},
		selectableRows: {
			allRowsItemText: 'All',
		},
		contextMessage: {
			singular: 'item',
			plural: 'items',
			message: 'selected',
		},
	},
	onChangePage: noop,
	onChangeRowsPerPage: noop,
	onRowClicked: noop,
	onRowDoubleClicked: noop,
	onRowExpandToggled: noop,
	onSelectedRowsChange: noop,
	onSort: noop,
};
